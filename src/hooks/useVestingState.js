import { useState, useEffect, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getVestingInfo, getVestingAccount } from '../utils/solana';

/**
 * Custom hook to manage vesting state and configuration
 */
export function useVestingState() {
    const { connection } = useConnection();
    const { wallet, connected } = useWallet();
    const [vestingInfo, setVestingInfo] = useState(null);
    const [vestingAccount, setVestingAccount] = useState(null);
    const [withdrawableAmounts, setWithdrawableAmounts] = useState(null);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTick(prev => (prev + 1) % 10);
        }, 30000);

        return () => clearTimeout(timeout);
    }, [tick]);

    // Fetch user's vesting information
    const fetchConfig = useCallback(async () => {
        if (!connection || !connected || !wallet) {
            return;
        }

        try {
            const userPubkey = wallet.adapter.publicKey;
            const vestingData = await getVestingInfo(connection, userPubkey);
            setVestingInfo(vestingData);

            const vestingAccountData = await getVestingAccount(connection, userPubkey);
            setVestingAccount(vestingAccountData);
        } catch (err) {
            console.error('Failed to fetch vesting info:', err);
            // Don't set error for vesting info as it might not exist for new users
        }
    }, [connection, connected, wallet]);

    // Poll for configuration updates every 30 seconds
    useEffect(() => {
        fetchConfig();

        const interval = setInterval(() => {
            fetchConfig();
        }, 30000); // 30 seconds

        return () => clearInterval(interval);
    }, [fetchConfig]);

    // Calculate withdrawable amount
    const calculateWithdrawableAmount = useCallback(() => {
        if (!vestingInfo || !vestingAccount) {
            return { withdrawable: 0, withdrawn: 0, total: 0 };
        }

        const total = vestingInfo.totalAmount || 0;
        const withdrawn = vestingInfo.withdrawnAmount || 0;
        if (!vestingAccount.startTime) {
            return { withdrawable: 0, withdrawn, total };
        }

        const now = Date.now();
        let unlockedPercentage = 0;

        if (now >= vestingAccount.startTime) {
            unlockedPercentage += vestingAccount.vestingUnlock;
        }
        if (now >= vestingAccount.startTime + vestingAccount.lockPeriod) {
            unlockedPercentage += vestingAccount.initialUnlock;
        }
        const elapsed = Math.max(now - vestingAccount.startTime - vestingAccount.lockPeriod, 0);
        if (vestingAccount.releaseInterval > 0) {
            unlockedPercentage += vestingAccount.releaseRate * (elapsed / vestingAccount.releaseInterval);
        }

        const withdrawable = Math.max(0, total * Math.min(1, unlockedPercentage) - withdrawn);

        return { withdrawable, withdrawn, total };
    }, [vestingInfo, vestingAccount]);

    useEffect(() => {
        if (vestingInfo && vestingAccount) {
            setWithdrawableAmounts(calculateWithdrawableAmount());
        }
    }, [tick, calculateWithdrawableAmount]);

    // Determine if user has purchased tokens based on vesting data
    const hasPurchased = !!(vestingInfo && vestingInfo.totalAmount > 0);

    return {
        vestingInfo,
        refetch: fetchConfig,
        withdrawableAmounts,
        hasPurchased
    };
}

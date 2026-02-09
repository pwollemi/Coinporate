import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import {
    PublicKey,
    Transaction,
    SystemProgram,
    TransactionInstruction,
    Keypair,
} from "@solana/web3.js";
import {
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import { presaleIdl } from "../data/idl/presale";
import { vestingIdl } from "../data/idl/vesting";
import { PRESALE_CONFIG } from "../data/constants";

/**
 * Browser-compatible wallet wrapper for Keypair.
 * Anchor's Wallet/NodeWallet is not exported in browser builds.
 */
function createKeypairWallet(keypair) {
    return {
        publicKey: keypair.publicKey,
        async signTransaction(tx) {
            tx.partialSign(keypair);
            return tx;
        },
        async signAllTransactions(txs) {
            return txs.map((tx) => {
                tx.partialSign(keypair);
                return tx;
            });
        },
    };
}

/**
 * Get or create associated token account
 */
export async function getOrCreateAssociatedTokenAccount(
    connection,
    wallet,
    mint,
    owner
) {
    const associatedToken = PublicKey.findProgramAddressSync(
        [
            owner.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            new PublicKey(mint).toBuffer(),
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    )[0];

    const accountInfo = await connection.getAccountInfo(associatedToken);
    if (!accountInfo) {
        const createIx = createAssociatedTokenAccountInstruction(
            associatedToken,
            owner,
            owner,
            new PublicKey(mint)
        );
        return { address: associatedToken, instruction: createIx };
    }
    return { address: associatedToken, instruction: null };
}

/**
 * Get user's USDC token account
 */
export async function getUserUSDCAccount(userPubkey) {
    const usdcMint = new PublicKey(PRESALE_CONFIG.fundToken);
    return getAssociatedTokenAddressSync(usdcMint, userPubkey);
}

/**
 * Get user's CORP token account
 */
export async function getUserCORPAccount(userPubkey) {
    const corpMint = new PublicKey(PRESALE_CONFIG.rewardToken);
    return getAssociatedTokenAddressSync(corpMint, userPubkey);
}

/**
 * Create associated token account instruction
 */
function createAssociatedTokenAccountInstruction(
    associatedTokenAddress,
    payer,
    wallet,
    splToken
) {
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: wallet,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: splToken,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false,
        },
    ];
    return new TransactionInstruction({
        keys,
        programId: ASSOCIATED_TOKEN_PROGRAM_ID,
        data: Buffer.from([]),
    });
}

export function dummyWallet() {
    const keypair = Keypair.generate();
    return createKeypairWallet(keypair);
}

/**
 * Get Anchor provider
 */
export function getProvider(connection, wallet = dummyWallet()) {
    return new AnchorProvider(connection, wallet);
}

/**
 * Get presale program instance
 */
export function getPresaleProgram(connection, wallet = dummyWallet()) {
    const provider = getProvider(connection, wallet);
    return new Program(presaleIdl, provider);
}

/**
 * Get presale program instance
 */
export function getVestingProgram(connection, wallet = dummyWallet()) {
    const provider = getProvider(connection, wallet);
    return new Program(vestingIdl, provider);
}

/**
 * Get presale account PDAs
 */
export function getPresalePDAs() {
    const rewardMint = new PublicKey(PRESALE_CONFIG.rewardToken);

    const [presaleAccount] = PublicKey.findProgramAddressSync(
        [rewardMint.toBuffer(), Buffer.from("presale-seed")],
        new PublicKey(PRESALE_CONFIG.presaleProgramId)
    );

    const [vaultAccount] = PublicKey.findProgramAddressSync(
        [rewardMint.toBuffer(), Buffer.from("token-seed")],
        new PublicKey(PRESALE_CONFIG.presaleProgramId)
    );

    return { presaleAccount, vaultAccount };
}

/**
 * Get vesting account PDAs
 */
export function getVestingPDAs() {
    const rewardMint = new PublicKey(PRESALE_CONFIG.rewardToken);

    const [vestingAccount, vestingAccountBump] = PublicKey.findProgramAddressSync(
        [rewardMint.toBuffer(), Buffer.from("vesting-seed")],
        new PublicKey(PRESALE_CONFIG.vestingProgramId)
    );

    const [vestingVault, vestingVaultBump] = PublicKey.findProgramAddressSync(
        [rewardMint.toBuffer(), Buffer.from("token-seed")],
        new PublicKey(PRESALE_CONFIG.vestingProgramId)
    );

    return { vestingAccount, vestingAccountBump, vestingVault, vestingVaultBump };
}

/**
 * Get recipient info PDA
 */
export function getRecipientInfoPDA(user, rewardMint) {
    return PublicKey.findProgramAddressSync(
        [
            new PublicKey(rewardMint).toBuffer(),
            new PublicKey(user).toBuffer(),
            Buffer.from("recipient-info-seed"),
        ],
        new PublicKey(PRESALE_CONFIG.presaleProgramId)
    );
}

/**
 * Get vesting info PDA
 */
export function getVestingInfoPDA(user, rewardMint) {
    return PublicKey.findProgramAddressSync(
        [
            new PublicKey(rewardMint).toBuffer(),
            new PublicKey(user).toBuffer(),
            Buffer.from("vesting-info"),
        ],
        new PublicKey(PRESALE_CONFIG.vestingProgramId)
    );
}

/**
 * Get vesting account PDA
 */
export function getVestingAccountPDA(rewardMint) {
    return PublicKey.findProgramAddressSync(
        [new PublicKey(rewardMint).toBuffer(), Buffer.from("vesting-seed")],
        new PublicKey(PRESALE_CONFIG.vestingProgramId)
    );
}

/**
 * Execute presale deposit transaction
 */
export async function executeDeposit(connection, wallet, sendTx, usdcAmount) {
    try {
        const program = getPresaleProgram(connection, wallet);
        const userPubkey = wallet.adapter.publicKey;

        // Get user accounts
        const userUSDCAccount = await getUserUSDCAccount(userPubkey);
        // const userCORPAccount = await getUserCORPAccount(userPubkey);

        // Get PDAs
        const { presaleAccount, vaultAccount } = getPresalePDAs();
        const [recipientInfo] = getRecipientInfoPDA(
            userPubkey,
            PRESALE_CONFIG.rewardToken
        );
        const [vestingInfo] = getVestingInfoPDA(
            userPubkey,
            PRESALE_CONFIG.rewardToken
        );

        // Get vesting account (this would need to be configured based on your vesting setup)
        const [vestingAccount, vestingAccountBump] = getVestingAccountPDA(
            PRESALE_CONFIG.rewardToken
        );

        // Convert USDC amount to lamports (USDC has 6 decimals)
        const usdcAmountLamports = Math.floor(usdcAmount * 1e6);

        // Build transaction
        const depositIx = await program.methods
            .deposit(vestingAccountBump, new BN(usdcAmountLamports))
            .accounts({
                user: userPubkey,
                fundMint: new PublicKey(PRESALE_CONFIG.fundToken),
                rewardMint: new PublicKey(PRESALE_CONFIG.rewardToken),
                depositorFundTokenAccount: userUSDCAccount,
                vaultAccount: vaultAccount,
                presaleAccount: presaleAccount,
                recipientInfo: recipientInfo,
                vestingAccount: vestingAccount,
                vestingInfo: vestingInfo, // Using same PDA for now
                vestingProgram: new PublicKey(PRESALE_CONFIG.vestingProgramId),
                tokenProgram: TOKEN_PROGRAM_ID,
                systemProgram: SystemProgram.programId,
                clock: new PublicKey("SysvarC1ock11111111111111111111111111111111"),
            })
            .instruction();

        const tx = new Transaction().add(depositIx);
        const txid = await sendTx(tx, connection);

        // Wait for transaction confirmation
        await connection.confirmTransaction(txid, "confirmed");

        return { success: true, txid };
    } catch (error) {
        console.error("Deposit failed:", error);
        return { success: false, error };
    }
}

export async function executeWithdraw(connection, wallet, sendTx) {
    try {
        const program = getVestingProgram(connection, wallet);
        const userPubkey = wallet.adapter.publicKey;

        // Get user accounts
        const userCORPAccount = await getUserCORPAccount(userPubkey);

        // Get PDAs
        const {
            vestingAccount,
            vestingAccountBump,
            vestingVault,
            vestingVaultBump,
        } = getVestingPDAs();
        const [vestingInfo, vestingInfoBump] = getVestingInfoPDA(
            userPubkey,
            PRESALE_CONFIG.rewardToken
        );

        // Build transaction
        const depositIx = await program.methods
            .withdraw(vestingAccountBump, vestingVaultBump, vestingInfoBump)
            .accounts({
                taker: userPubkey,
                takerReceiveTokenAccount: userCORPAccount,
                vaultAccount: vestingVault,
                vestingAccount: vestingAccount,
                vestingInfo: vestingInfo,
                tokenProgram: TOKEN_PROGRAM_ID,
                clock: new PublicKey("SysvarC1ock11111111111111111111111111111111"),
            })
            .instruction();

        const tx = new Transaction().add(depositIx);
        const txid = await sendTx(tx, connection);

        // Wait for transaction confirmation
        await connection.confirmTransaction(txid, "confirmed");

        return { success: true, txid };
    } catch (error) {
        console.error("Deposit failed:", error);
        return { success: false, error };
    }
}

/**
 * Check if user has USDC balance
 */
export async function checkUSDCBalance(connection, userPubkey) {
    try {
        const userUSDCAccount = await getUserUSDCAccount(
            connection,
            null,
            userPubkey
        );
        const accountInfo =
            await connection.getTokenAccountBalance(userUSDCAccount);
        return accountInfo.value.uiAmount;
    } catch (error) {
        console.error("Failed to check USDC balance:", error);
        return 0;
    }
}

/**
 * Check if user has CORP balance
 */
export async function checkCORPBalance(connection, userPubkey) {
    try {
        const userCORPAccount = await getUserCORPAccount(
            connection,
            null,
            userPubkey
        );
        const accountInfo =
            await connection.getTokenAccountBalance(userCORPAccount);
        return accountInfo.value.uiAmount;
    } catch (error) {
        console.error("Failed to check CORP balance:", error);
        return 0;
    }
}

/**
 * Fetch presale configuration from on-chain program
 */
export async function fetchPresaleConfig(connection, wallet = dummyWallet()) {
    try {
        const program = getPresaleProgram(connection, wallet);
        const { presaleAccount } = getPresalePDAs();
        // Fetch the presale account data
        const presaleData = await program.account.presaleAccount.fetch(presaleAccount);

        return {
            startTime: presaleData.startTime.toNumber() * 1000,
            period: presaleData.period.toNumber() * 1000,
            exchangeRate: presaleData.exchangeRate.toNumber(),
            serviceFee: presaleData.serviceFee.toNumber(),
            isPresalePaused: presaleData.isPresalePaused,
            initialRewardsAmount: new BN(presaleData.initialRewardsAmount).div(new BN(1e9)).toNumber(),
            totalParticipants: presaleData.totalParticipants.toNumber(),
            publicSoldAmount: new BN(presaleData.publicSoldAmount).div(new BN(1e9)).toNumber(),
            unsoldTokenWithdrawn: presaleData.unsoldTokenWithdrawn,
            currentPresalePeriod: presaleData.currentPresalePeriod.toNumber() * 1000
        };
    } catch (error) {
        console.error("Failed to fetch presale config:", error);
        return null;
    }
}

/**
 * Get user's vesting information
 */
export async function getVestingInfo(connection, userPubkey, wallet = dummyWallet()) {
    try {
        const program = getVestingProgram(connection, wallet);
        const [vestingInfo] = getVestingInfoPDA(userPubkey, PRESALE_CONFIG.rewardToken);
        const vestingData = await program.account.recipientInfo.fetch(vestingInfo);

        return {
            totalAmount: new BN(vestingData.totalAmount).div(new BN(1e9)).toNumber(),
            withdrawnAmount: new BN(vestingData.withdrawnAmount).div(new BN(1e9)).toNumber(),
        };
    } catch (error) {
        console.error("Failed to fetch vesting info:", error);
        return null;
    }
}

/**
 * Get user's vesting account
 */
export async function getVestingAccount(
    connection,
    userPubkey,
    wallet = dummyWallet()
) {
    try {
        const program = getVestingProgram(connection, wallet);
        const [vestingAccount] = getVestingAccountPDA(PRESALE_CONFIG.rewardToken);
        const vestingAccountData =
            await program.account.vestingAccount.fetch(vestingAccount);

        return {
            vestingName: vestingAccountData.vestingName,
            startTime: vestingAccountData.startTime.toNumber() * 1000,
            vestingPeriod: vestingAccountData.vestingPeriod.toNumber() * 1000,
            vestingUnlock: vestingAccountData.vestingUnlock.toNumber() / 1000,
            lockPeriod: vestingAccountData.lockPeriod.toNumber() * 1000,
            initialUnlock: vestingAccountData.initialUnlock.toNumber() / 1000,
            releaseInterval: vestingAccountData.releaseInterval.toNumber() * 1000,
            releaseRate: vestingAccountData.releaseRate.toNumber() / 1000,
        };
    } catch (error) {
        console.error("Failed to fetch vesting account:", error);
        return null;
    }
}

/**
 * Get presale status based on current time and configuration
 */
export function getPresaleStatus(config, currentTime = Date.now()) {
    const now = currentTime;
    const startTime = Number(config.startTime);
    const period = Number(config.period);
    const endTime = startTime + period;

    if (config.isPresalePaused) {
        return {
            status: "paused",
            startTime,
            endTime,
            remainingTime: config.currentPresalePeriod || 0,
            isBeforeStart: false,
            isActive: false,
            isEnded: false,
        };
    }

    if (now < startTime) {
        return {
            status: "before_start",
            startTime,
            endTime,
            remainingTime: startTime - now,
            isBeforeStart: true,
            isActive: false,
            isEnded: false,
        };
    } else if (now < endTime) {
        return {
            status: "active",
            startTime,
            endTime,
            remainingTime: endTime - now,
            isBeforeStart: false,
            isActive: true,
            isEnded: false,
        };
    } else {
        return {
            status: "ended",
            startTime,
            endTime,
            remainingTime: 0,
            isBeforeStart: false,
            isActive: false,
            isEnded: true,
        };
    }
}

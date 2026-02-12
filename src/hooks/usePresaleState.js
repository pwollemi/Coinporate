import { useState, useEffect, useCallback } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { fetchPresaleConfig, getPresaleStatus } from "../utils/solana";

/**
 * Custom hook to manage presale state and configuration
 */
export function usePresaleState() {
  const { connection } = useConnection();
  const [config, setConfig] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch presale configuration
  const fetchConfig = useCallback(async () => {
    if (!connection) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const presaleConfig = await fetchPresaleConfig(connection);

      setConfig(presaleConfig);

      // Calculate initial status
      const presaleStatus = getPresaleStatus(presaleConfig);
      setStatus(presaleStatus);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [connection]);

  // Update status based on current time
  const updateStatus = useCallback(() => {
    if (config) {
      const presaleStatus = getPresaleStatus(config);
      setStatus(presaleStatus);
    }
  }, [config]);

  // Poll for configuration updates every 30 seconds
  useEffect(() => {
    fetchConfig();

    const interval = setInterval(() => {
      fetchConfig();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [fetchConfig]);

  // Update status every second for real-time countdown
  useEffect(() => {
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, [updateStatus]);

  return {
    config,
    status,
    loading,
    error,
    refetch: fetchConfig,
    isBeforeStart: status?.isBeforeStart || false,
    isActive: status?.isActive || false,
    isEnded: status?.isEnded || false,
    isPaused: status?.status === "paused",
    timeUntilStart: status?.remainingTime || 0,
    timeUntilEnd: status?.remainingTime || 0,
  };
}

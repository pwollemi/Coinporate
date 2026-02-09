export const WIDGET_URL =
  "https://discord.com/api/guilds/1392771543355883621/widget.json";
export const X_URL = "https://x.com/coinporate";
export const DISCORD_URL = "https://discord.gg/sNYmYg8MQC";
export const WHITEPAPER_URL = "/coinporate_whitepaper.pdf";

// Solana Presale Configuration
export const PRESALE_CONFIG = {
  // Network configuration
  network: "mainnet-beta",

  // Token addresses
  fundToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC
  rewardToken: "ikSoC1pyRPeQzLTxC55q71TyWxjqht3aAh1tLn6sswy", // CORP

  // Program addresses
  presaleProgramId: "Fz2uso7i2r3oMESUMfmC7wBa2gfzz7me4DZfXSrKqycp",
  vestingProgramId: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",

  // Presale parameters
  exchangeRate: 5000, // 1 CORP = 5000 USDC tokens
  serviceFee: 0, // 5%,

  // Default fallback values
  defaultStartTime: Date.now() + 10000, // 10 seconds from now
  defaultPeriod: 20 * 24 * 60 * 60 * 1000, // 20 days in milliseconds
};

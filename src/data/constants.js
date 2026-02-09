export const WIDGET_URL =
  "https://discord.com/api/guilds/1392771543355883621/widget.json";
export const X_URL = "https://x.com/coinporate";
export const DISCORD_URL = "https://discord.gg/sNYmYg8MQC";
export const WHITEPAPER_URL = "/coinporate_whitepaper.pdf";

// Solana Presale Configuration
export const PRESALE_CONFIG = {
  // Network configuration
  network: "devnet",

  // Token addresses
  fundToken: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr", // USDC
  rewardToken: "838PZQy4TJNq479LzUtvBW99JLFhFRFUPyEBcg9VrkdQ", // CORP

  // Program addresses
  presaleProgramId: "Fz2uso7i2r3oMESUMfmC7wBa2gfzz7me4DZfXSrKqycp",
  vestingProgramId: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",

  // Presale parameters
  exchangeRate: 5000, // 1 CORP = 5000 USDC tokens
  serviceFee: 50000, // 5%,

  // Default fallback values
  defaultStartTime: Date.now() + 10000, // 10 seconds from now
  defaultPeriod: 20 * 24 * 60 * 60 * 1000, // 20 days in milliseconds
};

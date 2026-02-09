import heroBackground from "../source/academyDetail/background.png";
import solanaOverview from "../source/academy/solana-beginner/solana-overview.png";
import solanaFirstTransaction from "../source/academy/solana-beginner/solana-first-transaction.png";
import metamaskDownload from "../source/academy/solana-beginner/metamask-download.png";
import metamaskSetupOptions from "../source/academy/solana-beginner/metamask-setup-options.png";
import metamaskRecoveryPhrase from "../source/academy/solana-beginner/metamask-recovery-phrase.png";
import metamaskWalletSettings from "../source/academy/solana-beginner/metamask-wallet-settings.png";
import metamaskSolanaNetwork from "../source/academy/solana-beginner/metamask-solana-network.png";
import metamaskAddFunds from "../source/academy/solana-beginner/metamask-add-funds.png";
import metamaskTokenMarketplace from "../source/academy/solana-beginner/metamask-token-marketplace.png";
import metamaskReceiveCrypto from "../source/academy/solana-beginner/metamask-receive-crypto.png";
import metamaskTransferCrypto from "../source/academy/solana-beginner/metamask-transfer-crypto.png";
import ledgerLiveDownload from "../source/academy/solana-beginner/ledger-live-download.png";
import ledgerLiveGetStarted from "../source/academy/solana-beginner/ledger-live-get-started.png";

const defaultSections = [
  {
    title: "Introduction",
    paragraphs: [
      "More academy content is coming soon. Check back for fresh lessons and walkthroughs.",
    ],
  },
];

const baseArticles = [
  {
    id: 1,
    difficulty: "Easy",
    title:
      "Solana Beginner Tutorial (2026): Wallets, DEXs, Staking, First Steps & Safety",
    text: "Get into crypto in 2026 with this step-by-step Solana beginner tutorial: learn key blockchain concepts, how to set up wallets, and discover key safety rules.",
    detailSubtitle:
      "Get into crypto in 2026 with this step-by-step Solana beginner tutorial: learn key blockchain concepts, how to set up wallets, and discover key safety rules.",
    image: solanaOverview,
    heroImage: solanaOverview,
    time: "12 min",
    date: "2026-02-09",
    categories: ["Blockchain", "Wallets", "Staking", "Security"],
    sections: [
      {
        title: "Solana Beginner: Key Takeaways",
        list: [
          "Solana (SOL) is great for beginners: fast, low-fee, and easy to use.",
          "Wallets: store your tokens securely and manage private keys safely.",
          "DEXs vs CEXs: centralized exchanges for convenience; decentralized for full control.",
          "Safety first: protect your seed phrase, avoid fake apps, and do not chase FOMO projects.",
        ],
      },
      {
        title: "Introduction",
        paragraphs: [
          "What started as an obscure cryptography experiment in 2008 has become a staple of modern digital finance.",
          "As conventional savings accounts no longer offer meaningful returns, more and more people are turning to cryptocurrencies.",
          "This is not a fringe movement. In 2026, about 30% of Americans own crypto, and over half of them report profits. That means you do not need technical skills or a large budget to start successfully.",
          "For beginners, Solana (SOL) is a smart choice: fast, affordable, and designed for everyday users, not just tech wizards.",
          "In this Solana beginner tutorial, you will learn crypto basics, how to set up your first wallet, where and how to trade, and how to start exploring decentralized finance. By the end, you will be ready to take your first steps and learn as you go.",
        ],
      },
      {
        title: "Crypto 101: blockchain, Bitcoin, and beyond",
        paragraphs: [
          "You have heard the terms: crypto, Bitcoin, blockchain, but what do they actually mean?",
        ],
        list: [
          "Cryptocurrency is a digital asset stored on a blockchain, a secure, shared ledger that records all transactions transparently. Instead of relying on banks or governments, decentralized networks maintain blockchains worldwide.",
          "To use crypto, you need a wallet, which acts like your personal account. We will cover wallets in detail shortly.",
          "Bitcoin remains the dominant cryptocurrency. In 2026, 74% of crypto users own Bitcoin, largely because it excels as a long-term store of value.",
          "Solana, by contrast, focuses on usability. Growing in popularity since 2024, Solana is now the choice of 20% of users who enjoy its near-instant transactions, low fees, and support for everyday apps.",
        ],
        tailParagraphs: [
          "In short: Bitcoin stores value, while Solana powers everyday use. That is why many users keep both.",
        ],
      },
      {
        title: "Solana beginner concepts you need to know",
        paragraphs: [
          "If you are new to Solana, fret not. A few core ideas will help you start confidently:",
        ],
        list: [
          "Solana is a blockchain that records and confirms transactions on a public ledger.",
          "It has tokens: digital assets used for payments, staking rewards, or governance. Solana's native token is SOL, but the network supports thousands of others.",
          "You access tokens through a wallet, which stores your private keys: the credentials that prove ownership.",
          "Finally, validators are computers that process transactions and secure the network. With over 1,000 validators worldwide, Solana remains decentralized, reliable, and censorship-resistant.",
        ],
      },
      {
        title: "Why is Solana great for crypto beginners?",
        paragraphs: ["The key reasons crypto beginners choose Solana:"],
        list: [
          "Speed and low fees: Thousands of transactions per second; fees under $0.01.",
          "Accessibility: Anyone with internet access can use it - no bank account or credit check required.",
          "Beginner-friendly: Designed for everyday users, not developers.",
          "Safe sandbox: Solana is ideal for experimenting with small amounts and learning quickly.",
        ],
      },
      {
        title: "What can you do with Solana?",
        paragraphs: ["Even as a complete Solana beginner, you can:"],
        list: [
          "Send money globally in seconds.",
          "Trade digital assets.",
          "Collect NFTs and digital art.",
          "Play blockchain-based games.",
          "Earn yield via staking or DeFi apps.",
          "Join communities built around shared interests.",
        ],
        media: [
          {
            type: "image",
            src: solanaOverview,
            alt: "Solana ecosystem overview",
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/GZ-bYOCMfmE",
            title: "Solana beginner overview",
          },
        ],
      },
      {
        title: "DEXs and CEXs: Solana beginner explanation",
        paragraphs: [
          "When trading crypto, you will encounter two platform types:",
          "Centralized Exchanges (CEXs) like Coinbase or Binance require accounts and identity verification. They are convenient but hold custody of your funds.",
          "Decentralized Exchanges (DEXs) on Solana like Raydium or Orca let you trade directly from your wallet. No registration, no intermediaries, and full control of your assets.",
        ],
        listTitle: "CEXs vs DEXs in short:",
        list: [
          "DEXs equal freedom, but at the price of responsibility. Irreversible transactions mean that security is completely up to you.",
          "CEXs are good for beginners to buy SOL, and then move it to a wallet to explore DEXs safely.",
        ],
      },
      {
        title: "3 steps to get started on Solana",
        list: [
          "Set up a wallet. Wallets are free apps you can install in minutes. They store your keys and let you interact with the network.",
          "Get some SOL. SOL, Solana's native token, is what you need to start exploring the network. Just a tiny amount is enough to cover transaction fees and experiment with a few transactions.",
          "Make your first transaction. Send SOL, swap tokens on a DEX, or try a Solana app. Transactions confirm in seconds, making it easy to learn safely.",
        ],
        media: [
          {
            type: "image",
            src: solanaFirstTransaction,
            alt: "Solana first transaction example",
          },
        ],
      },
      {
        title: "Solana beginner guide: How to set up your first wallet?",
        paragraphs: [
          "Your wallet is the most important tool in crypto. It is the software that lets you access the Solana network, manage your tokens, and interact with apps.",
          "Think of a wallet as three things in one:",
        ],
        list: [
          "A password manager that stores your private keys.",
          "A bank account viewer that shows your balances.",
          "A digital signature tool that approves transactions.",
        ],
      },
      {
        title: "What are the key Solana wallet types?",
        paragraphs: ["There are two main wallet categories:"],
        list: [
          "Software wallets: Browser extensions, mobile apps, or desktop apps. These are quick to set up and ideal for beginners.",
          "Hardware wallets: Physical devices that store keys offline, offering maximum security.",
          "Hot wallets (e.g. MetaMask, Phantom): Connected to the internet and best for small amounts and daily use.",
          "Cold wallets (e.g. Ledger): Offline storage designed for long-term security.",
        ],
        tailParagraphs: ["Below, we will walk through how to set up both."],
      },
      {
        title: "How to set up a hot wallet (MetaMask)",
        paragraphs: [
          "MetaMask is one of the most popular wallets and enables Solana access through its interface.",
          "Using MetaMask is similar to modern banking apps; the difference is that you control the assets, not a company.",
        ],
        listTitle: "Step-by-step",
        list: [
          "Download MetaMask. Visit MetaMask's official website and download the wallet for your platform (browser extension, mobile app, or web app). Verify URLs to avoid scam or phishing.",
          "Install the app and select Create a new wallet.",
          "Choose your setup and recovery option. MetaMask offers two setup options: sign in using Google or Apple; create a wallet using a Secret Recovery Phrase (SRP).",
          "Using an SRP gives you full control without sharing personal information like email. Choose this option if privacy matters to you. You will receive a list of recovery words: this is your only backup.",
          "Important: Write your recovery phrase on paper and store it offline. Never take screenshots or save it digitally. If you lose it, or someone else captures it, your assets may be gone forever. MetaMask will not be able to recover your credentials.",
          "Set a password. Choose a strong password to protect access to the wallet on your device. This password does not replace your recovery phrase, it only protects local access.",
          "Finalize your wallet setup. Once inside MetaMask, take a moment to name your wallet, review network settings, and set your preferred currency.",
          "You can see that Solana is available as a default network.",
          "Add funds to get ready to start buying, swapping, sending, and receiving SOL.",
          "Token Marketplace lets you use your debit or credit card to securely pay for your chosen Solana token.",
          "Receive Crypto gives you a list of wallet addresses and QR codes you can use to receive tokens and collectibles on Solana.",
          "Transfer crypto enables you to transfer crypto directly to your wallet for free from CEXs like Coinbase and Binance.",
        ],
        media: [
          {
            type: "image",
            src: metamaskDownload,
            alt: "MetaMask download screen",
          },
          {
            type: "image",
            src: metamaskSetupOptions,
            alt: "MetaMask setup options",
          },
          {
            type: "image",
            src: metamaskRecoveryPhrase,
            alt: "MetaMask recovery phrase prompt",
          },
          {
            type: "image",
            src: metamaskWalletSettings,
            alt: "MetaMask wallet settings",
          },
          {
            type: "image",
            src: metamaskSolanaNetwork,
            alt: "Solana network in MetaMask",
          },
          {
            type: "image",
            src: metamaskAddFunds,
            alt: "Add funds in MetaMask",
          },
          {
            type: "image",
            src: metamaskTokenMarketplace,
            alt: "MetaMask token marketplace",
          },
          {
            type: "image",
            src: metamaskReceiveCrypto,
            alt: "Receive crypto in MetaMask",
          },
          {
            type: "image",
            src: metamaskTransferCrypto,
            alt: "Transfer crypto in MetaMask",
          },
        ],
      },
      {
        title: "How to add Solana to Ledger Wallet (cold wallet)",
        paragraphs: [
          "Ledger wallet keeps your crypto secure by storing your private keys offline. While the app shows your balances, the physical device protects and signs transactions.",
        ],
        listTitle: "Step-by-step",
        list: [
          "Download Ledger Live to your desktop or mobile from the official website. Ledger Live is the companion app you will use to manage accounts, install apps, and view your portfolio.",
          'Once installed, open the app and choose "Get Started."',
          'Set up your Ledger device. Connect your Ledger device to your computer or phone and select "Set up as new device." You will create a PIN code directly on the device and receive a 24-word recovery phrase.',
          "Important: Write it down on paper and store it offline. Never take screenshots or store it digitally. Anyone with this phrase can access your funds.",
          "Install the Solana App. In the Ledger Live app, go to Manager, enable the connection on your device, and search for Solana. Install the Solana app to allow your Ledger to interact with the Solana blockchain.",
          "Add a Solana Account. Go to Accounts -> Add account, select Solana, and confirm on your Ledger device. Ledger Live will create a Solana account linked to your hardware wallet.",
          "Receive SOL. Your Solana wallet is now ready: you can use it to receive SOL by copying the wallet address from Ledger Live and sending a small amount to it.",
        ],
        media: [
          {
            type: "image",
            src: ledgerLiveDownload,
            alt: "Ledger Live download",
          },
          {
            type: "image",
            src: ledgerLiveGetStarted,
            alt: "Ledger Live get started",
          },
        ],
      },
      {
        title:
          "Next steps on Solana: buy-and-hold, staking, and trading on Solana DEXs",
        paragraphs: [
          "Once you are comfortable using a wallet to send and receive SOL, you can start exploring Solana without unnecessary risks. Here are some of the most accessible options:",
        ],
        list: [
          "Buy-and-hold SOL: Purchase SOL via a centralized exchange or directly in wallets like MetaMask or Phantom, then hold it as you learn the ecosystem.",
          "Staking SOL: Delegate your SOL to a validator to help secure the network and earn about 5-7% annual rewards (2026). Your SOL stays in your wallet, you retain ownership, and rewards accumulate automatically, making it a safe way to earn as you learn.",
          "Swap tokens on decentralized exchanges like Raydium or Orca. This is not day trading, but a practical way to learn how transactions work and understand token prices.",
        ],
        tailParagraphs: [
          "We will dive deeper into Solana DEXs in the next article. For now, remember: start small, treat each step as learning, and avoid risky all-in bets.",
        ],
      },
      {
        title: "Safety for Solana beginners",
        paragraphs: [
          "Solana is beginner-friendly, but smart habits pay off, especially when it comes to security:",
          "Avoid losing your seed phrase or private keys. If you lose them, you lose access to your funds permanently. Write them on paper, and store them offline in different places. And, of course, never share them with anyone.",
          "Be cautious about fake wallets and phishing websites. Download Solana wallets only from official websites and trusted app stores, and double-check links before clicking.",
        ],
        list: [
          "Be cautious of schemes and influencers promising quick profits. Crypto rewards patience and learning, not hype. Likewise, avoid panicking during price dips. Short-term volatility is normal.",
          "Finally, steer clear of risky moves like leverage trading, going all-in, or chasing FOMO projects. Solana rewards steady learning, not rushed decisions.",
        ],
      },
      {
        title: "Solana beginner journey: from curious to confident",
        paragraphs: [
          "Solana's speed, low fees, and beginner-focused design make it perfect for newcomers. But crypto is a tool, and success depends on how you use it.",
          "Start by securing a wallet, adding some SOL, and completing a few basic transactions. Once comfortable, you can explore decentralized exchanges and staking, all while learning safely and confidently.",
          "That is exactly what the next article in our Solana Beginner Guide series will cover: a practical, hands-on look at Solana DEXs and how to use them confidently.",
          "The next move is yours: set up your wallet, send a small amount of SOL, and make your first transaction. Learning by doing is the fastest way to gain confidence. Are you in?",
        ],
      },
      {
        title: "Solana Beginner FAQ",
        list: [
          "Why is Solana great for crypto newcomers? Solana is fast, low-fee, and beginner-friendly, letting you explore crypto safely with small amounts.",
          "What is the best wallet for a Solana beginner? Hot wallets like MetaMask or Phantom are great for daily use, while cold wallets like Ledger offer long-term security. Many users combine both.",
          "Should a Solana beginner start with a CEX or DEX? Beginners often buy SOL on CEXs for convenience, then transfer it to a wallet to explore DEXs safely and keep full control.",
          "How can a Solana beginner earn rewards? Stake SOL with validators, hold SOL or top tokens, or practice swapping tokens on DEXs.",
          "What mistakes should Solana beginners avoid? Losing seed phrases, using fake wallets, trusting influencers blindly, panicking during dips, or chasing FOMO projects.",
        ],
      },
    ],
  },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const academyArticles = baseArticles.map((article) => ({
  ...article,
  slug: article.slug || slugify(article.title),
  heroImage: article.heroImage || heroBackground,
  detailSubtitle: article.detailSubtitle || article.text,
  sections: article.sections || defaultSections,
}));

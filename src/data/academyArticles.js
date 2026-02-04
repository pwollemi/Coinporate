import cardWallet from "../source/academy/874d467f1492d761e85e4f34213a35a1c95d8eb2.jpg";
import cardEarth from "../source/academy/41621fd23245fbca571f7094a0dbf548fa4dae52.jpg";
import cardRobot from "../source/academy/6b5ab7dfd150065a2824a0fef96d1407349a3f83.jpg";
import heroBackground from "../source/academyDetail/background.png";

const defaultSections = [
  {
    title: "Introduction",
    paragraphs: [
      "Transaction fees can look tiny per swap or transfer, but over time they add up. This article breaks down where costs come from and how to keep more value in your wallet. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
      "Whether you are using Solana, Ethereum, or a multi-chain app, the same principles apply: understand the fee mechanics, reduce unnecessary actions, and batch when you can. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
    ],
  },
  {
    title: "The Hidden Cost of Moving Money",
    paragraphs: [
      "Fees are rarely just the base network charge. Slippage, bridge costs, approvals, and failed transactions can quietly stack on top of one another. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. If you only remember one thing, make it this: small optimizations repeated consistently beat one-time tweaks, and they keep working long after the initial setup.",
      "When you add each small cost together, the total can feel like a tax on every move you make. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. You'll get a clearer sense of when to act, when to wait, and how to evaluate whether a tool or platform is actually helping you or just adding friction.",
    ],
  },
  {
    title: "Why Most People Overpay Without Realizing It",
    paragraphs: [
      "Most users click through default settings, which often prioritize speed over cost. That is great for urgency, but expensive for routine activity. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. This is designed to be actionable on day one, with no special tools required beyond the settings you already have access to.",
      "Timing also matters. Congested hours mean higher fees, while quieter windows can be significantly cheaper. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. We also highlight simple benchmarks you can use to measure progress so you know if your changes are actually improving outcomes.",
    ],
  },
  {
    title: "Smart Strategies to Reduce Your Fees",
    paragraphs: [
      "You do not need complex tactics to see results. A few consistent habits can cut costs dramatically over time. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. The examples are deliberately straightforward so you can adapt the pattern to your own workflow without overhauling everything.",
    ],
    list: [
      "Batch actions together instead of submitting them one by one.",
      "Use low-fee networks or rollups for routine transfers.",
      "Set manual gas limits and priorities when the network is calm.",
      "Avoid unnecessary approvals and revoke old ones periodically.",
    ],
  },
  {
    title: "The Compounding Effect of Small Savings",
    paragraphs: [
      "Saving a few cents per transaction sounds minor, but across hundreds of actions it becomes meaningful. That is capital you can reinvest instead of losing to friction. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. Once you internalize the pattern, you will spend less time second-guessing and more time moving quickly with confidence.",
      "Over a year, consistent fee discipline can add up to real gains. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
    ],
  },
  {
    title: "Conclusion",
    paragraphs: [
      "You do not need to be an expert to lower your costs. Understand the fee path, act with intention, and treat every move as a chance to optimize. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
    ],
  },
];

const baseArticles = [
  {
    id: 1,
    difficulty: "Easy",
    title: "Reduce transaction fees on Solana",
    text: "Learn simple tactics to lower costs when sending tokens, swapping, and interacting with on-chain apps.",
    image: cardWallet,
    time: "5 min",
    date: "2025-01-14",
    categories: ["Fees", "Blockchain", "Solana"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Transaction fees on Solana are small, but frequent actions can add up quickly. This guide explains where those costs come from and how to keep more value in your wallet. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. If you only remember one thing, make it this: small optimizations repeated consistently beat one-time tweaks, and they keep working long after the initial setup.",
        ],
      },
      {
        title: "The Hidden Cost of Moving Money",
        paragraphs: [
          "Priority fees, failed transactions, and unnecessary approvals can quietly increase the total cost of every swap, transfer, or token action. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. You'll get a clearer sense of when to act, when to wait, and how to evaluate whether a tool or platform is actually helping you or just adding friction.",
        ],
      },
      {
        title: "Why Most People Overpay Without Realizing It",
        paragraphs: [
          "Default settings often prioritize speed over cost. If you never check fee settings, you are likely paying more than you need to for routine activity. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. This is designed to be actionable on day one, with no special tools required beyond the settings you already have access to.",
        ],
      },
      {
        title: "Practical Ways to Lower Solana Fees",
        paragraphs: [
          "Batch actions together, avoid spammy routes, and use wallets that let you set priority fees manually when the network is calm. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. We also highlight simple benchmarks you can use to measure progress so you know if your changes are actually improving outcomes.",
        ],
      },
    ],
  },
  {
    id: 2,
    difficulty: "Easy",
    title: "What is a crypto wallet?",
    text: "A friendly introduction to hot vs cold wallets, seed phrases, and safe self-custody.",
    image: cardEarth,
    time: "5 min",
    date: "2025-01-10",
    categories: ["Wallets", "Security"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "A crypto wallet is your gateway to sending, receiving, and storing digital assets. It manages the keys that prove ownership of your funds. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. The examples are deliberately straightforward so you can adapt the pattern to your own workflow without overhauling everything.",
        ],
      },
      {
        title: "Hot vs Cold Wallets",
        paragraphs: [
          "Hot wallets stay connected to the internet for convenience, while cold wallets keep keys offline for stronger security. The right choice depends on how often you transact. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. Once you internalize the pattern, you will spend less time second-guessing and more time moving quickly with confidence.",
        ],
      },
      {
        title: "Seed Phrases and Recovery",
        paragraphs: [
          "Your seed phrase is the master key to your wallet. Anyone with it can control your funds, so store it offline and never share it. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
        ],
      },
      {
        title: "Everyday Safety Habits",
        paragraphs: [
          "Use hardware wallets for large balances, enable passcodes, and double-check addresses before every send. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
        ],
      },
    ],
  },
  {
    id: 3,
    difficulty: "Easy",
    title: "Crypto basics: tokens and gas",
    text: "Understand token types, network fees, and why gas fluctuates across blockchains.",
    image: cardRobot,
    time: "5 min",
    date: "2024-12-28",
    categories: ["Blockchain", "Fees"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Tokens represent value or utility on a blockchain, and gas is the fee you pay to use the network. Understanding both helps you avoid surprises. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. If you only remember one thing, make it this: small optimizations repeated consistently beat one-time tweaks, and they keep working long after the initial setup.",
        ],
      },
      {
        title: "Tokens vs Coins",
        paragraphs: [
          "Coins are native to a blockchain, while tokens are built on top of it. Each type follows different rules for fees and transfers. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. You'll get a clearer sense of when to act, when to wait, and how to evaluate whether a tool or platform is actually helping you or just adding friction.",
        ],
      },
      {
        title: "How Gas Works",
        paragraphs: [
          "Gas is the cost of computation. Simple transfers cost less, while complex smart contract actions cost more. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. This is designed to be actionable on day one, with no special tools required beyond the settings you already have access to.",
        ],
      },
      {
        title: "Why Fees Change",
        paragraphs: [
          "Network congestion, block space demand, and priority settings can make fees rise or fall throughout the day. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. We also highlight simple benchmarks you can use to measure progress so you know if your changes are actually improving outcomes.",
        ],
      },
    ],
  },
  {
    id: 4,
    difficulty: "Easy",
    title: "How staking rewards are calculated",
    text: "Explore APR, lockups, and how validator performance impacts yield.",
    image: cardWallet,
    time: "5 min",
    date: "2024-12-10",
    categories: ["Staking", "Yield"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Staking rewards depend on protocol rules, validator performance, and how long you keep assets locked. This article breaks down the key inputs. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. The examples are deliberately straightforward so you can adapt the pattern to your own workflow without overhauling everything.",
        ],
      },
      {
        title: "APR vs APY",
        paragraphs: [
          "APR shows simple annual returns, while APY includes compounding. The difference can matter over longer periods. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. Once you internalize the pattern, you will spend less time second-guessing and more time moving quickly with confidence.",
        ],
      },
      {
        title: "Validator Performance",
        paragraphs: [
          "Uptime, commission, and penalties all affect what you earn. A reliable validator can make a meaningful difference. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
        ],
      },
      {
        title: "Lockups and Compounding",
        paragraphs: [
          "Longer lockups often yield higher rewards, but reduce flexibility. Decide how much liquidity you need before committing. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
        ],
      },
    ],
  },
  {
    id: 5,
    difficulty: "Easy",
    title: "Avoid common crypto scams",
    text: "Spot phishing, fake airdrops, and malicious approvals before they cost you funds.",
    image: cardEarth,
    time: "5 min",
    date: "2024-11-21",
    categories: ["Security", "Wallets"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Scams target urgency and curiosity. Learning the common patterns helps you protect your wallet before damage is done. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. If you only remember one thing, make it this: small optimizations repeated consistently beat one-time tweaks, and they keep working long after the initial setup.",
        ],
      },
      {
        title: "Phishing and Fake Sites",
        paragraphs: [
          "Attackers mimic real brands with lookalike URLs and social posts. Always verify the domain before connecting a wallet. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. You'll get a clearer sense of when to act, when to wait, and how to evaluate whether a tool or platform is actually helping you or just adding friction.",
        ],
      },
      {
        title: "Malicious Approvals and Drainers",
        paragraphs: [
          "Some sites trick users into granting unlimited token approvals, then drain funds. Revoke old approvals regularly. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. This is designed to be actionable on day one, with no special tools required beyond the settings you already have access to.",
        ],
      },
      {
        title: "Red Flags and Safe Practices",
        paragraphs: [
          "Unexpected DMs, unrealistic promises, and urgent countdowns are red flags. Slow down and verify every step. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. We also highlight simple benchmarks you can use to measure progress so you know if your changes are actually improving outcomes.",
        ],
      },
    ],
  },
  {
    id: 6,
    difficulty: "Easy",
    title: "What is a blockchain explorer?",
    text: "Learn how to track transactions, token transfers, and on-chain activity.",
    image: cardRobot,
    time: "5 min",
    date: "2024-11-02",
    categories: ["Blockchain", "Security"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "A blockchain explorer is a public search tool that lets you inspect on-chain activity in real time. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. The examples are deliberately straightforward so you can adapt the pattern to your own workflow without overhauling everything.",
        ],
      },
      {
        title: "Reading a Transaction",
        paragraphs: [
          "You can see the sender, receiver, fees, status, and block confirmation to verify whether a transfer succeeded. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. Once you internalize the pattern, you will spend less time second-guessing and more time moving quickly with confidence.",
        ],
      },
      {
        title: "Tokens, Events, and Contracts",
        paragraphs: [
          "Explorers show token transfers, smart contract calls, and event logs, which help you trace complex activity. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
        ],
      },
      {
        title: "How to Verify Activity",
        paragraphs: [
          "Use explorers to confirm deposits, troubleshoot delays, and cross-check addresses before you trust them. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
        ],
      },
    ],
  },
  {
    id: 7,
    difficulty: "Medium",
    title: "Yield strategies: staking vs liquidity",
    text: "Compare passive yield options and understand the risks of impermanent loss.",
    image: cardWallet,
    time: "7 min",
    date: "2024-10-18",
    categories: ["Yield", "Staking", "Tokenomics"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Staking and liquidity providing can both generate yield, but they come with different risks and tradeoffs. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. If you only remember one thing, make it this: small optimizations repeated consistently beat one-time tweaks, and they keep working long after the initial setup.",
        ],
      },
      {
        title: "Staking Yield Basics",
        paragraphs: [
          "Staking rewards are tied to network security and validator performance. Returns are typically more predictable. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. You'll get a clearer sense of when to act, when to wait, and how to evaluate whether a tool or platform is actually helping you or just adding friction.",
        ],
      },
      {
        title: "Liquidity Providing and Impermanent Loss",
        paragraphs: [
          "Liquidity pools earn fees, but price swings can reduce your value versus holding. This is the core tradeoff. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. This is designed to be actionable on day one, with no special tools required beyond the settings you already have access to.",
        ],
      },
      {
        title: "Choosing a Strategy",
        paragraphs: [
          "Consider your time horizon, risk tolerance, and need for liquidity before choosing between the two. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. We also highlight simple benchmarks you can use to measure progress so you know if your changes are actually improving outcomes.",
        ],
      },
    ],
  },
  {
    id: 8,
    difficulty: "Medium",
    title: "Understanding token unlock schedules",
    text: "Learn how vesting impacts supply, price volatility, and investor strategy.",
    image: cardEarth,
    time: "7 min",
    date: "2024-10-01",
    categories: ["Tokenomics", "Regulation"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Unlock schedules control when tokens become available to sell or transfer. They shape supply and market expectations. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. The examples are deliberately straightforward so you can adapt the pattern to your own workflow without overhauling everything.",
        ],
      },
      {
        title: "Vesting Basics",
        paragraphs: [
          "Vesting spreads token distribution over time to align teams and investors with long-term goals. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. Once you internalize the pattern, you will spend less time second-guessing and more time moving quickly with confidence.",
        ],
      },
      {
        title: "Market Impact of Unlocks",
        paragraphs: [
          "Large unlocks can increase selling pressure, especially if liquidity is thin. This is why schedules matter. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
        ],
      },
      {
        title: "How to Read a Schedule",
        paragraphs: [
          "Look for cliffs, linear vesting periods, and the total percentage unlocked each month or quarter. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
        ],
      },
    ],
  },
  {
    id: 9,
    difficulty: "Medium",
    title: "How liquidity pools work",
    text: "A practical guide to AMMs, pool ratios, and trading fees.",
    image: cardRobot,
    time: "7 min",
    date: "2024-09-12",
    categories: ["Yield", "Fees", "Blockchain"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Liquidity pools power decentralized trading by allowing users to swap against shared reserves instead of order books. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. If you only remember one thing, make it this: small optimizations repeated consistently beat one-time tweaks, and they keep working long after the initial setup.",
        ],
      },
      {
        title: "AMMs and Pricing",
        paragraphs: [
          "Automated market makers set prices based on pool ratios. As trades happen, the ratio shifts and the price changes. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. You'll get a clearer sense of when to act, when to wait, and how to evaluate whether a tool or platform is actually helping you or just adding friction.",
        ],
      },
      {
        title: "Pool Ratios and Fees",
        paragraphs: [
          "LPs earn a portion of trading fees, which are distributed based on their share of the pool. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. This is designed to be actionable on day one, with no special tools required beyond the settings you already have access to.",
        ],
      },
      {
        title: "Risks and Best Practices",
        paragraphs: [
          "Impermanent loss, low liquidity, and volatile pairs increase risk. Choose pools that match your risk profile. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. We also highlight simple benchmarks you can use to measure progress so you know if your changes are actually improving outcomes.",
        ],
      },
    ],
  },
  {
    id: 10,
    difficulty: "Medium",
    title: "Tokenomics for founders",
    text: "Design emission schedules, incentives, and sustainable community rewards.",
    image: cardWallet,
    time: "7 min",
    date: "2024-08-27",
    categories: ["Tokenomics", "Blockchain"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Tokenomics defines how value flows through your ecosystem. Strong design aligns incentives across users, investors, and builders. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. The examples are deliberately straightforward so you can adapt the pattern to your own workflow without overhauling everything.",
        ],
      },
      {
        title: "Supply and Emission Design",
        paragraphs: [
          "Decide on total supply, inflation, and how new tokens enter circulation. Clarity here builds trust. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. Once you internalize the pattern, you will spend less time second-guessing and more time moving quickly with confidence.",
        ],
      },
      {
        title: "Incentives and Alignment",
        paragraphs: [
          "Rewards should encourage real usage, not just speculation. Tie emissions to measurable participation. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
        ],
      },
      {
        title: "Governance and Sustainability",
        paragraphs: [
          "Make governance transparent and plan for long-term funding so the token can support the project beyond launch. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
        ],
      },
    ],
  },
  {
    id: 11,
    difficulty: "Hard",
    title: "Advanced staking: validator selection",
    text: "Learn how commission, uptime, and delegation strategies affect returns.",
    image: cardEarth,
    time: "9 min",
    date: "2024-08-03",
    categories: ["Staking", "Yield", "Security"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Validator choice directly affects rewards, reliability, and security. Picking well is an active strategy, not a one-time decision. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. If you only remember one thing, make it this: small optimizations repeated consistently beat one-time tweaks, and they keep working long after the initial setup.",
        ],
      },
      {
        title: "Commission and Uptime",
        paragraphs: [
          "Lower commission can increase yields, but uptime and slashing history are just as important. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. You'll get a clearer sense of when to act, when to wait, and how to evaluate whether a tool or platform is actually helping you or just adding friction.",
        ],
      },
      {
        title: "Delegation Strategy",
        paragraphs: [
          "Spreading stake across multiple validators reduces risk and helps decentralize the network. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. This is designed to be actionable on day one, with no special tools required beyond the settings you already have access to.",
        ],
      },
      {
        title: "Monitoring and Rebalancing",
        paragraphs: [
          "Regularly check performance metrics and move stake when a validator's reliability drops. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. We also highlight simple benchmarks you can use to measure progress so you know if your changes are actually improving outcomes.",
        ],
      },
    ],
  },
  {
    id: 12,
    difficulty: "Hard",
    title: "Managing DAO treasuries",
    text: "Best practices for treasury diversification, on-chain reporting, and security.",
    image: cardRobot,
    time: "9 min",
    date: "2024-07-15",
    categories: ["Security", "Tokenomics"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "DAO treasuries need clear policies for spending, diversification, and transparency. Without them, funds erode quickly. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. The examples are deliberately straightforward so you can adapt the pattern to your own workflow without overhauling everything.",
        ],
      },
      {
        title: "Diversification and Risk",
        paragraphs: [
          "Holding only the native token creates concentration risk. Many treasuries balance stablecoins, blue chips, and yield assets. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. Once you internalize the pattern, you will spend less time second-guessing and more time moving quickly with confidence.",
        ],
      },
      {
        title: "On-chain Reporting",
        paragraphs: [
          "Regular reports build trust and make governance decisions easier. Standardize dashboards and update on a predictable cadence. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
        ],
      },
      {
        title: "Security and Controls",
        paragraphs: [
          "Multi-sig wallets, spending limits, and approvals reduce risk and make treasury operations safer. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
        ],
      },
    ],
  },
  {
    id: 13,
    difficulty: "Hard",
    title: "Cross-chain bridging risks",
    text: "Understand bridge security models, attack vectors, and safety checks.",
    image: cardWallet,
    time: "9 min",
    date: "2024-06-22",
    categories: ["Security", "Blockchain"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Bridges connect ecosystems, but they are also high-value targets. Understanding how they work helps you reduce risk. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. If you only remember one thing, make it this: small optimizations repeated consistently beat one-time tweaks, and they keep working long after the initial setup.",
        ],
      },
      {
        title: "Bridge Security Models",
        paragraphs: [
          "Some bridges rely on multisigs, others on light clients or relayers. Each model has different trust assumptions. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. You'll get a clearer sense of when to act, when to wait, and how to evaluate whether a tool or platform is actually helping you or just adding friction.",
        ],
      },
      {
        title: "Common Attack Vectors",
        paragraphs: [
          "Smart contract bugs, compromised keys, and weak validation logic can lead to large losses. It also explains the context, tradeoffs, and the few decisions that matter most in practice. In practice, the biggest savings come from small habits: checking fee settings, timing actions during quieter windows, and avoiding unnecessary transactions that add no real value. When you add those up across weeks or months, the impact is larger than most people expect. This is designed to be actionable on day one, with no special tools required beyond the settings you already have access to.",
        ],
      },
      {
        title: "Safety Checks Before Bridging",
        paragraphs: [
          "Verify the official bridge, start with small transfers, and monitor confirmations on both chains. You'll see how the idea applies in real scenarios and which small choices tend to have outsized effects. We'll also walk through the typical decision points so you can spot where costs creep in, compare options quickly, and choose the path that fits your goals instead of defaulting to whatever the app suggests. We also highlight simple benchmarks you can use to measure progress so you know if your changes are actually improving outcomes.",
        ],
      },
    ],
  },
  {
    id: 14,
    difficulty: "Hard",
    title: "On-chain compliance and regulation",
    text: "How teams handle KYC, AML, and reporting across jurisdictions.",
    image: cardEarth,
    time: "9 min",
    date: "2024-06-01",
    categories: ["Regulation", "Security"],
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Compliance requirements vary by region, but most teams face some mix of identity checks, monitoring, and reporting. The goal is to move past definitions and into practical steps you can apply immediately. The focus here is clarity: what actually moves the needle, what is noise, and how to build a simple routine that keeps you efficient without slowing you down. The examples are deliberately straightforward so you can adapt the pattern to your own workflow without overhauling everything.",
        ],
      },
      {
        title: "KYC and AML Basics",
        paragraphs: [
          "Know-your-customer and anti-money-laundering checks help verify users and reduce financial crime risk. We connect the concept to everyday decisions so you can act with more confidence and less guesswork. Think of this as a practical playbook you can revisit whenever you are about to make a transaction, adjust settings, or evaluate a new product or protocol. Once you internalize the pattern, you will spend less time second-guessing and more time moving quickly with confidence.",
        ],
      },
      {
        title: "Jurisdictional Considerations",
        paragraphs: [
          "Rules differ across countries, so teams often tailor onboarding and disclosures to each market. Expect concrete examples, common pitfalls, and a clearer sense of what to prioritize. These details may feel minor in isolation, but they compound into real savings and a smoother experience over time. To make it practical, we call out the exact moments people tend to skip, the defaults that quietly cost more, and the quick checks that prevent the most common mistakes.",
        ],
      },
      {
        title: "Transparent Reporting",
        paragraphs: [
          "Clear documentation and audit trails make it easier to satisfy regulators and build user trust. By the end, you should have a simple mental checklist for using this idea well. By the end, you should be able to explain the tradeoffs in plain language and make confident decisions without second-guessing yourself. We also translate the jargon into everyday language so you can explain the idea to a teammate or friend without losing the important nuances.",
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
  heroImage: heroBackground,
  detailSubtitle: article.detailSubtitle || article.text,
  sections: article.sections || defaultSections,
}));

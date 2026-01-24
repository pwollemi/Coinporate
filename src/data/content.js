import headLeft from "../assets/coinporate/head-left.png";
import headRight from "../assets/coinporate/head-right.png";
import headLeftAlt from "../assets/coinporate/head-left-2.png";
import streamerImage from "../assets/coinporate/streamer.png";

import iconCrown from "../assets/coinporate/icons/referral.svg";
import iconGrid from "../assets/coinporate/icons/brand.svg";
import iconReward from "../assets/coinporate/icons/reward.svg";
import iconComments from "../assets/coinporate/icons/activate.svg";
import iconLiquidity from "../assets/coinporate/icons/liquidity.svg";
import iconStacking from "../assets/coinporate/icons/stacking.svg";
import iconBuyback from "../assets/coinporate/icons/buyback.svg";
import iconUtility from "../assets/coinporate/icons/utility.svg";
import iconShield from "../assets/coinporate/icons/shield.svg";
import iconChart from "../assets/coinporate/icons/chart.svg";

import team1 from "../assets/coinporate/team/lead-1.png";
import team2 from "../assets/coinporate/team/lead-2.png";
import team3 from "../assets/coinporate/team/lead-3.png";
import team4 from "../assets/coinporate/team/lead-4.png";
import team5 from "../assets/coinporate/team/lead-5.png";

import logoPlaid from "../assets/coinporate/icons/plaid.svg";
import logoAfterpay from "../assets/coinporate/icons/afterpay.svg";
import logoAttentive from "../assets/coinporate/icons/attentive.svg";
import logoSquare from "../assets/coinporate/icons/square.svg";
import logoMiro from "../assets/coinporate/icons/miro.svg";

export const countdownUnits = [
  { value: "24", label: "days", numberColor: "countdown__value--accent" },
  { value: "18", label: "hours", numberColor: "countdown__value--light" },
  { value: "37", label: "minutes", numberColor: "countdown__value--light" },
  { value: "43", label: "seconds", numberColor: "countdown__value--light" },
];

export const navLinks = [
  "About",
  "How to earn",
  "Staking",
  "Whitepaper",
  "Airdrop",
];

export const tokenFeatures = [
  { icon: iconCrown, label: "Design symbolic brand assets" },
  { icon: iconGrid, label: "Build modular lore systems" },
  { icon: iconReward, label: "Reward meaningful participation" },
  { icon: iconComments, label: "Activate onchain communities" },
];

export const useCases = [
  {
    id: "personal",
    title: "PERSONAL BRANDS",
    image: headLeft,
    list: [
      "Instagram",
      "TikTok",
      "Onlyfans influencers",
      "Artists",
      "Streamers",
      "Athletes",
      "Experts",
    ],
    cards: [
      {
        id: 1,
        title: "Raise capital and fund projects",
        text: "Launch personal tokens to finance new creative works, tours, content, or experiences directly with their audience.",
      },
      {
        id: 2,
        title: "Build and reward active communities",
        text: "Engage fans through community-driven initiatives, exclusive events, or special tokens for loyal supporters.",
      },
      {
        id: 3,
        title: "Give exclusive access to content, presales, NFT drops",
        text: "Offer token holders unique content, early access to merchandise, behind-the-scenes material, or NFT collectibles.",
      },
      {
        id: 4,
        title: "Launch loyalty and rewards programs",
        text: "Run custom reward schemes, including meetups, merch, or premium digital perks.",
        dim: true,
      },
      {
        id: 5,
        title: "Launch loyalty and rewards programs",
        text: "Run custom reward schemes, including meetups, merch, or premium digital perks.",
        dim: true,
      },
      {
        id: 6,
        title: "Launch loyalty and rewards programs",
        text: "Run custom reward schemes, including meetups, merch, or premium digital perks.",
        dim: true,
      },
    ],
  },
  {
    id: "companies",
    title: "COMPANIES & STARTUPS",
    image: headRight,
    reverse: true,
    list: [
      "Tech firms",
      "fashion labels",
      "e-commerce",
      "SaaS",
      "creative industries",
      "scale",
    ],
    cards: [
      {
        id: 1,
        title: "Raise capital and fund projects",
        text: "Tokenize shares or project equity to attract investment from a global decentralized community - without banks or VC.",
      },
      {
        id: 2,
        title: "Build and reward active communities",
        text: "Foster stronger user/customer engagement by offering governance rights or tangible rewards to token holders.",
      },
      {
        id: 3,
        title: "Give exclusive access to content, presales, NFT drops",
        text: "Provide early-bird or exclusive offers, new product access, or digital assets to token holders.",
        dim: true,
      },
      {
        id: 4,
        title: "Launch loyalty and rewards programs",
        text: "Developer robust loyalty ecosystems based on token ownership - discounts, benefits, status levels, etc.",
        dim: true,
      },
      {
        id: 5,
        title: "Enable trading, staking and liquidity farming",
        text: "List company tokens on exchanges; run stacking pools or liquidity incentives to encourage market activity.",
        dim: true,
      },
      {
        id: 6,
        title: "Run crowdfunding campaigns and launchpads",
        text: "Raise funds for R&D, expansion or product launches via blockchain-powered campaigns open to global investors.",
        dim: true,
      },
    ],
  },
  {
    id: "communities",
    title: "COMMUNITIES & MICROBRANDS",
    image: headLeftAlt,
    list: [
      "NGOs",
      "educational projects",
      "local initiatives",
      "gaming",
      "fan communities",
    ],
    cards: [
      {
        id: 1,
        title: "Raise capital and fund projects",
        text: "Crowdfund for social, educational or gaming projects; support new community initiatives with distributed funding.",
      },
      {
        id: 2,
        title: "Build and reward active communities",
        text: "Incentivize participation, volunteering or engagement through community token rewards or voting rights.",
      },
      {
        id: 3,
        title: "Give exclusive access to content, presales, NFT drops",
        text: "Unlock specialized courses, lectures, digital assets, in-game rewards, or member-only content for token holders.",
        dim: true,
      },
      {
        id: 4,
        title: "Launch loyalty and rewards programs",
        text: "Recognize donors, high-engagement members or volunteers with rewards, special access, or digital badges.",
        dim: true,
      },
      {
        id: 5,
        title: "Enable trading, staking and liquidity farming",
        text: "Offer community tokens tradable on decentralized exchanges; reward top supporters through special staking or liquidity programs.",
        dim: true,
      },
      {
        id: 6,
        title: "Run crowdfunding campaigns and launchpads",
        text: "Fund ambitious projects (albums, art installations, films) by pre-selling access or stakes using their token.",
        dim: true,
      },
    ],
  },
];

export const liquidityCards = [
  {
    icon: iconLiquidity,
    title: "Liquidity Pools & AMMs",
    text: "Earn trading fees and rewards for providing liquidity",
    active: true,
  },
  {
    icon: iconStacking,
    title: "Stacking Programs",
    text: "Lock in CORP tokens and receive bonuses",
  },
  {
    icon: iconBuyback,
    title: "Buyback & Burn",
    text: "A portion of platform fees goes back to support token value",
  },
  {
    icon: iconUtility,
    title: "Utility & Daily Use",
    text: "Tokens needed for platform access, special drops, voting and events",
  },
  {
    icon: iconCrown,
    title: "Referral Rewards",
    text: "Earn bonuses for inviting new members and investors",
  },
];

export const distributionItems = [
  { value: "50%", label: "ICO" },
  { value: "30%", label: "Reward" },
  { value: "10%", label: "Marketing" },
  { value: "5%", label: "Team" },
  { value: "3%", label: "Risk Mgmt" },
  { value: "1%", label: "Advisors" },
  { value: "1%", label: "Market Liquidity Reserve" },
];

export const investCards = [
  {
    title: "Innovative, Decentralized Fundraising Model",
    text: "CORP empowers both creators and businesses to raise capital directly from a global community - no banks, VCs, or exchanges required - unlocking new, scalable funding opportunities for all types of projects.",
    variant: "dark",
    mediaType: "video",
    colspan: 7,
  },
  {
    title: "Transparent and Secure Blockchain Infrastructure",
    text: "Every transaction is on-chain, ensuring maximum transparency, immutable records, and advanced security, so all users can trust the platform and verify how funds and rewards are managed.",
    variant: "sage",
    icon: iconShield,
    colspan: 3,
  },
  {
    title: "Flexible, Custom Community Incentives",
    text: "Each brand, project, or creator can fully customize how they reward and engage their supporters, building highly tailored ecosystems that drive participation and loyalty.",
    variant: "lime",
    colspan: 3,
  },
  {
    title: "Universal Adoption Potential",
    text: "Designed for influencers, artists, companies, NGOs, and beyond, CORP taps into massive network effects as every new project brings their audience, multiplying holders, liquidity, and use cases.",
    variant: "image",
    image: streamerImage,
    colspan: 7,
  },
  {
    title: "Borderless, Global Accessibility",
    text: "Anyone from anywhere can join, invest, and participate in the Coinporate ecosystem without barriers of traditional finance.",
    variant: "dark",
    mediaType: "video",
    imageClass: "invest-card__orb",
    colspan: 7,
  },
  {
    title: "Ever-Growing Token Liquidity",
    text: "Through automated market making, staking rewards, buybacks, and referral initiatives, CORP ensures that token trading and liquidity keep pace with platform adoption, attracting both users and investors.",
    variant: "sage",
    icon: iconChart,
    colspan: 3,
  },
];

export const tokenMarkers = [
  {
    label: "Soft cap",
    value: "$250,000",
    left: "21%",
  },
  {
    label: "Hard cap",
    value: "$1.5M",
    sub: "Bonding Curve Max Raise",
    detail:
      "100% of raised funds go toward development, staking rewards, and community growth",
    left: "51%",
  },
  {
    label: "Bonus",
    sub: "First 500 participants:",
    detail: "Eligible for airdrop snapshot",
    left: "81%",
  },
];

export const roadmapNodes = [
  { id: 1, left: "0%", status: "done" },
  { id: 2, left: "19%", status: "done" },
  { id: 3, left: "37%", status: "active", label: "In Progress" },
  { id: 4, left: "57%", status: "pending" },
  { id: 5, left: "76%", status: "pending" },
  { id: 6, left: "95%", status: "pending" },
];

export const roadmapCards = [
  {
    number: "1",
    title: "Ensure Liquidity & Technical Launch",
    text: "Kick off by building robust liquidity pools for CORP tokens on decentralized exchanges (DEX). Launch the platform MVP, onboard first creators and brands, and secure initial trading volume. Early liquidity providers benefit from special rewards, staking, and bonus programs to set a strong market foundation.",
  },
  {
    number: "2",
    title: "Expand Token Distribution & Accessibility",
    text: "Develop and strengthen the network for token distribution: onboard additional projects, open up token access via new channels, and implement fiat on-ramps or secondary exchange listings to boost global availability. Begin strategic partnerships with launchpads, NFT providers, and platforms servicing creators and startups.",
  },
  {
    number: "3",
    title: "Aggressive Marketing & Community Growth",
    text: "Roll out targeted marketing campaigns to reach creators, startups, and businesses with their audiences. Launch ambassador programs, educational series, and collaborative events with recognized Web3 communities. Leverage Discord, X, TikTok, and Instagram for brand storytelling and case studies.",
    status: "In Progress",
  },
  {
    number: "4",
    title: "Major Exchange Listings",
    text: "Apply for and secure listings on leading centralized exchanges to increase liquidity and market capitalization. Prepare tech and legal documentation, engage market makers, and run promotional trading competitions to maximize awareness and onboarding of new investors and users.",
    status: "Upcoming",
  },
  {
    number: "5",
    title: "Ecosystem Expansion & New Feature Development",
    text: "Introduce advanced utilities (governance, NFT integration, cross-chain bridges, DeFi modules), launch corporate services (custom token launches for brands), and expand to new markets/regions. Organize hackathons, support launches of vertical projects, and continuously improve platform security and scalability.",
    status: "Upcoming",
  },
  {
    number: "6",
    title: "Long-Term Sustainability & Global Scaling",
    text: "Focus on enterprise adoption, B2B integrations, real-world utility (payments, licensing, ticketing), and strategic alliances with global payment processors, regulatory partners, and legacy businesses. Implement ongoing buyback, burn, and reward mechanisms to ensure token value grows alongside ecosystem adoption.",
    status: "Upcoming",
  },
];

export const teamMembers = [
  {
    name: "William Holeksa",
    image: team1,
    linkedin: "https://www.linkedin.com/in/williamholeksa/",
  },
  {
    name: "William Holeksa",
    image: team2,
    linkedin: "https://www.linkedin.com/in/williamholeksa/",
  },
  {
    name: "William Holeksa",
    image: team3,
    linkedin: "https://www.linkedin.com/in/williamholeksa/",
  },
  {
    name: "William Holeksa",
    image: team4,
    linkedin: "https://www.linkedin.com/in/williamholeksa/",
  },
  {
    name: "William Holeksa",
    image: team5,
    linkedin: "https://www.linkedin.com/in/williamholeksa/",
  },
];

export const teamBio =
  "Kick off by building robust liquidity pools for CORP tokens on decentralized exchanges (DEX). Launch the platform MVP, onboard first creators/brands, and secure initial trading volume. Early liquidity providers benefit from special rewards, staking, and bonus programs setting a strong market foundation.";

export const faqItems = [
  {
    number: "01",
    question: "What does staking crypto mean?",
    answer: `<p>Staking crypto means locking your cryptocurrency tokens for a period of time to support a platform or network and, in return, earn rewards.</p>
    <p>When you stake crypto:</p>
    <ul>
      <li>You already own the tokens.</li>
      <li>You voluntarily lock them in a smart contract.</li>
      <li>You may receive rewards such as:</li>
      <li>Additional tokens.</li>
      <li>Platform benefits.</li>
      <li>Access to ecosystem features.</li>
    </ul>
    <p>Staking is commonly used to encourage long-term participation and reduce short-term speculation.</p>
    <p>Within Coinporate, staking will allow users to actively participate in the ecosystem and support platform growth.</p>`,
    open: true,
  },
  {
    number: "02",
    question: "Which Solana wallet should I use?",
    answer: `<p>To interact with Solana-based tokens (including CORP), you will need a Solana-compatible wallet.</p>
    <p>Popular and widely trusted Solana wallets include:</p>
    <ul>
      <li>Phantom Wallet</li>
      <li>Solflare</li>
      <li>Backpack</li>
    </ul>
    <p>These wallets allow you to:</p>
    <ul>
      <li>Store Solana tokens</li>
      <li>Connect to decentralized applications</li>
      <li>Participate in token sales, staking, and airdrops</li>
    </ul>
    <p>For most users, Phantom is the easiest and most beginner-friendly option.</p>`,
  },
  {
    number: "03",
    question: "What is an ICO crypto coin?",
    answer: `<p>An ICO (Initial Coin Offering) is a method used by crypto projects to introduce a new token to the public.</p>
    <p>In an ICO:</p>
    <ul>
      <li>A project offers tokens for sale at an early stage.</li>
      <li>Participants purchase tokens before the platform or product is fully launched.</li>
      <li>Funds are typically used to build and grow the project.</li>
    </ul>
    <p>Coinporate's approach follows a structured and transparent pre-sale model, where the CORP token is introduced first and later used within the Coinporate platform once it goes live.</p>`,
  },
  {
    number: "04",
    question: "What is a crypto airdrop?",
    answer: `<p>A crypto airdrop is when a project distributes free tokens to users' wallets, usually to:</p>
    <ul>
      <li>Reward early supporters</li>
      <li>Increase awareness</li>
      <li>Encourage platform usage</li>
    </ul>
    <p>Airdrops may be given to users who:</p>
    <ul>
      <li>Hold a specific token</li>
      <li>Use a platform early</li>
      <li>Complete simple on-chain actions</li>
    </ul>
    <p>Airdrops are a common way to grow a community while decentralizing token ownership.</p>`,
  },
  {
    number: "05",
    question: "How do you claim a crypto airdrop?",
    answer: `<p>To claim a crypto airdrop, users usually need to:</p>
    <ol>
      <li>Connect their crypto wallet to the official project website</li>
      <li>Verify eligibility (based on wallet activity or participation)</li>
      <li>Confirm the claim transaction</li>
      <li>Receive tokens directly into their wallet</li>
    </ol>
    <p><strong>Important:</strong> Always make sure you are using the official Coinporate website and links. Never connect your wallet to unknown or unverified sources.</p>`,
  },
  {
    number: "06",
    question: "How can I buy the Coinporate token (CORP)?",
    answer: `<p>The CORP token will be available through an upcoming pre-sale before the Coinporate platform launches.</p>
    <p>General steps to buy CORP will include:</p>
    <ol>
      <li>Using a Solana-compatible wallet (such as Phantom)</li>
      <li>Visiting the official Coinporate pre-sale page</li>
      <li>Connecting your wallet</li>
      <li>Purchasing CORP using supported tokens (details will be announced)</li>
    </ol>
    <p>Once the Coinporate platform is live, CORP will be used within the ecosystem for:</p>
    <ul>
      <li>Participation</li>
      <li>Staking</li>
      <li>Access to platform features</li>
    </ul>
    <p>Always follow official Coinporate announcements for exact dates and instructions.</p>`,
  },
];

export const partnerLogos = [
  { src: logoPlaid, alt: "Plaid" },
  { src: logoAfterpay, alt: "Afterpay" },
  { src: logoAttentive, alt: "Attentive" },
  { src: logoSquare, alt: "Square" },
  { src: logoMiro, alt: "Miro" },
];

import { FarmData } from "@/types/farm";
import { VaultData } from "@/types/vault";
import { BorrowData } from "@/types/borrow";

export const socialLinks = [
  {
    imageSrc: "/icons/social/twitter.png",
    url: "https://twitter.com/VicunaFinance",
  },
  {
    imageSrc: "/icons/social/medium.png",
    url: "https://medium.com/@vicunafinance",
  },
  {
    imageSrc: "/icons/social/github.png",
    url: "",
  },
  {
    imageSrc: "/icons/social/discord.png",
    url: "",
  },
  {
    imageSrc: "/icons/social/dune.png",
    url: "https://dune.com/vicunafinance",
  },
  {
    imageSrc: "/icons/social/docs.png",
    url: "https://vicuna-finance.gitbook.io/vicuna-finance",
  },
  // {
  //   imageSrc: "/icons/social/telegram.png",
  //   url: "",
  // },
];

export const navLinks = [
  {
    label: "Borrow/Lend",
    href: "/borrow",
  },
  {
    label: "Farms",
    href: "/farms",
  },
  {
    label: "Vaults",
    href: "/vaults",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Governance",
    href: "/governance",
  },
  {
    label: "Presale",
    href: "/presale",
  }
];

export const portfolioData = [
  {
    title: "Deposited Collateral",
    value: "$3,000.00",
  },
  {
    title: "Borrowed Funds",
    value: "$1,521.93",
  },
  {
    title: "Net Value",
    value: "$2,478.07",
  },
  {
    title: "Fees and Interest",
    value: "$27.33",
  },
];

export const chainIcons = [
  "/icons/coins/ethereum.png",
  "/icons/coins/arbitrum one.png",
  "/icons/coins/op mainnet.png",
  "/icons/coins/polygon.png",
  "/icons/coins/base.png",
  "/icons/coins/bnb smart chain.png",
  "/icons/coins/sonic.svg",
];

export const vaultData: VaultData[] = [
  {
    vaultName: "ETH-USDC",
    vaultTVL: 3180000,
    vaultDexTVL: 110300000,
    vBoost: true,
    wallets: 0,
    deposited: 0,
    apy: 19.6,
    daily: 0.05,
    imageSrc2: "/icons/coins/ethereum.png",
    imageSrc1: "/icons/coins/usdc.png",
  },
  {
    vaultName: "wstETH-ETH",
    vaultTVL: 345140,
    vaultDexTVL: 10900000,
    vBoost: false,
    wallets: 0,
    deposited: 0,
    apy: 11.0,
    daily: 0.03,
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/wsteth.png",
  },
  {
    vaultName: "ARB-ETH",
    vaultTVL: 521180,
    vaultDexTVL: 8400000,
    vBoost: false,
    wallets: 0,
    deposited: 0,
    apy: 14.5,
    daily: 0.04,
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/arbitrum one.png",
  },
  {
    vaultName: "GMX-ETH",
    vaultTVL: 636210,
    vaultDexTVL: 916530,
    vBoost: false,
    wallets: 0,
    deposited: 0,
    apy: 117.0,
    daily: 0.32,
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/gmx.png",
  },
  {
    vaultName: "wBTC-USDT",
    vaultTVL: 287530,
    vaultDexTVL: 2170000,
    vBoost: false,
    wallets: 0,
    deposited: 0,
    apy: 12.5,
    daily: 0.03,
    imageSrc2: "/icons/coins/wbtc.png",
    imageSrc1: "/icons/coins/usdt.png",
  },
];

export const farmsData: FarmData[] = [
  {
    farmName: "ETH-USDC",
    tokenSymbol1: "ETH",
    tokenSymbol2: "USDC",
    farmTVL: 3180000,
    farmDexTVL: 110300000,
    apy: { from: 19.6, to: 19.6 },
    leverage: 2,
    apr: {
      yield_percentage: 17.87,
      token_borrowing_interest: 3.4,
      total_apr: 14.5,
      daily_apr: 0.04,
    },
    trending: true,
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/usdc.png",
    chainImageSrc: "/icons/coins/arbitrum one.png",
  },
  {
    farmName: "wstETH-ETH",
    tokenSymbol1: "wstETH",
    tokenSymbol2: "ETH",
    farmTVL: 345140,
    farmDexTVL: 10900000,
    apy: { from: 11.0, to: 13.0 },
    leverage: 2,
    apr: {
      yield_percentage: 52.26,
      token_borrowing_interest: 39.4,
      total_apr: 12.9,
      daily_apr: 0.04,
    },
    imageSrc1: "/icons/coins/wsteth.png",
    imageSrc2: "/icons/coins/ethereum.png",
    chainImageSrc: "/icons/coins/op mainnet.png",
  },
  {
    farmName: "ARB-ETH",
    tokenSymbol1: "ARB",
    tokenSymbol2: "ETH",
    farmTVL: 521180,
    farmDexTVL: 8400000,
    apy: { from: 14.5, to: 23.3 },
    leverage: 2,
    apr: {
      yield_percentage: 40.7,
      token_borrowing_interest: 19.3,
      total_apr: 21.4,
      daily_apr: 0.06,
    },
    imageSrc1: "/icons/coins/arbitrum one.png",
    imageSrc2: "/icons/coins/ethereum.png",
    chainImageSrc: "/icons/coins/op mainnet.png",
  },
  {
    farmName: "GMX-ETH",
    tokenSymbol1: "GMX",
    tokenSymbol2: "ETH",
    farmTVL: 636210,
    farmDexTVL: 916530,
    apy: { from: 117, to: 214.2 },
    leverage: 2,
    trending: true,
    apr: {
      yield_percentage: 155.3,
      token_borrowing_interest: 18.2,
      total_apr: 137.1,
      daily_apr: 0.38,
    },
    imageSrc1: "/icons/coins/gmx.png",
    imageSrc2: "/icons/coins/ethereum.png",
    chainImageSrc: "/icons/coins/arbitrum one.png",
  },
  {
    farmName: "wBTC-USDT",
    tokenSymbol1: "wBTC",
    tokenSymbol2: "USDT",
    farmTVL: 287530,
    farmDexTVL: 2170000,
    apy: { from: 12.5, to: 28.1 },
    leverage: 2,
    apr: {
      yield_percentage: 35.4,
      token_borrowing_interest: 9.3,
      total_apr: 26.1,
      daily_apr: 0.07,
    },
    imageSrc2: "/icons/coins/wbtc.png",
    imageSrc1: "/icons/coins/usdt.png",
    chainImageSrc: "/icons/coins/arbitrum one.png",
  },
];

export const borrowData: BorrowData[] = [
  {
    asset: {
      name: "Wrapped Liquid Staked Ethereum",
      symbol: "wstETH",
      imageSrc: "/icons/coins/wsteth.png",
    },
    totalSupplied: {
      amount: 51070,
      value: 187520000,
    },
    supplyAPY: 0.01,
    totalBorrowed: {
      amount: 334670,
      value: 1320000,
    },
    borrowAPY: 0.32,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Ethereum",
      symbol: "ETH",
      imageSrc: "/icons/coins/ethereum.png",
    },
    totalSupplied: {
      amount: 61460,
      value: 193500000,
    },
    supplyAPY: 2.23,
    totalBorrowed: {
      amount: 54180,
      value: 170580000,
    },
    borrowAPY: 2.98,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Wrapped BTC",
      symbol: "WBTC",
      imageSrc: "/icons/coins/wbtc.png",
    },
    totalSupplied: {
      amount: 3430,
      value: 220200000,
    },
    supplyAPY: 0.01,
    totalBorrowed: {
      amount: 1430,
      value: 91800000,
    },
    borrowAPY: 0.36,
    collateralFactor: 0.7,
  },
  {
    asset: {
      name: "USD Coin",
      symbol: "USDC",
      imageSrc: "/icons/coins/usdc.png",
    },
    totalSupplied: {
      amount: 155150000,
      value: 155150000,
    },
    supplyAPY: 6.83,
    totalBorrowed: {
      amount: 115160,
      value: 115160,
    },
    borrowAPY: 10.4,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Tether",
      symbol: "USDT",
      imageSrc: "/icons/coins/usdt.png",
    },
    totalSupplied: {
      amount: 53010000,
      value: 53010000,
    },
    supplyAPY: 6.74,
    totalBorrowed: {
      amount: 39610000,
      value: 39610000,
    },
    borrowAPY: 10.48,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Dai",
      symbol: "DAI",
      imageSrc: "/icons/coins/dai.png",
    },
    totalSupplied: {
      amount: 10930000,
      value: 10930000,
    },
    supplyAPY: 6.7,
    totalBorrowed: {
      amount: 8920000,
      value: 8920000,
    },
    borrowAPY: 11.5,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Radiant Capital",
      symbol: "RDNT",
      imageSrc: "/icons/coins/radiant.png",
    },
    totalSupplied: {
      amount: 20430000,
      value: 20430000,
    },
    supplyAPY: 0.32,
    totalBorrowed: {
      amount: 3410000,
      value: 3410000,
    },
    borrowAPY: 2.13,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Arbitrum",
      symbol: "ARB",
      imageSrc: "/icons/coins/arbitrum one.png",
    },
    totalSupplied: {
      amount: 17150000,
      value: 17150000,
    },
    supplyAPY: 0.13,
    totalBorrowed: {
      amount: 1770000,
      value: 1770000,
    },
    borrowAPY: 1.61,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "GMX",
      symbol: "GMX",
      imageSrc: "/icons/coins/gmx.png",
    },
    totalSupplied: {
      amount: 221020,
      value: 221020,
    },
    supplyAPY: 0.21,
    totalBorrowed: {
      amount: 36820,
      value: 36820,
    },
    borrowAPY: 1.42,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Camelot Token",
      symbol: "GRAIL",
      imageSrc: "/icons/coins/grail.png",
    },
    totalSupplied: {
      amount: 1130,
      value: 1130,
    },
    supplyAPY: 0.34,
    totalBorrowed: {
      amount: 310,
      value: 310,
    },
    borrowAPY: 1.67,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "ChainLink",
      symbol: "LINK",
      imageSrc: "/icons/coins/chainlink.png",
    },
    totalSupplied: {
      amount: 1990000,
      value: 1990000,
    },
    supplyAPY: 0.01,
    totalBorrowed: {
      amount: 25520,
      value: 25520,
    },
    borrowAPY: 0.2,
    collateralFactor: 0.5,
  },
];

export const presaleTokenAddr = {
  Base_USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  Base_USDT: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
  Fantom_axUSDC: "0x1B6382DBDEa11d97f24495C9A90b7c88469134a4",
  Fantom_lzUSDC: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf",
  Arb_USDC: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  Arb_USDT: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
};
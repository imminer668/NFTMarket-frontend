"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "df414c01a153c786664251c3a210614a";

// 2. Set chains
const mainnet = {
  chainId: 80001,
  name: "Mumbai",
  currency: "MATIC",
  explorerUrl: "https://mumbai.polygonscan.com",
  rpcUrl: "https://polygon-mumbai-bor-rpc.publicnode.com",
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Web3ModalProvider({ children }) {
  return children;
}

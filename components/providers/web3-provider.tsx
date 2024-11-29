"use client";
import { useState, useEffect } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, polygon, arbitrum, bsc, base, optimism } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    chains: [mainnet, polygon, arbitrum, bsc, base, optimism],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(mainnet.rpcUrls.default.http[0]),
      [polygon.id]: http(polygon.rpcUrls.default.http[0]),
      [arbitrum.id]: http(arbitrum.rpcUrls.default.http[0]),
      [bsc.id]: http(bsc.rpcUrls.default.http[0]),
      [base.id]: http(base.rpcUrls.default.http[0]),
      [optimism.id]: http(optimism.rpcUrls.default.http[0]),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: "Vicuna Finance",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [hydrate, setHydrate] = useState(false);

  useEffect(() => {
    setHydrate(true);
  }, []);
  return (
    <>
      {hydrate && (
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <ConnectKitProvider>{children}</ConnectKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      )}
    </>
  );
};

"use client";

import { useChainId, useChains } from "wagmi";
import { useState, useEffect } from "react";

export const useChainLogo = () => {
  const chainId = useChainId();
  const chains = useChains();
  const [chainImageSrc, setChainImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const currentChain = chains.find((chain) => chain.id === chainId);

    if (!currentChain) {
      setChainImageSrc(null);
      return;
    }

    const chainName = currentChain.name.toLowerCase();
    const logoSrc = `/icons/coins/${chainName}.png`;

    setChainImageSrc(logoSrc);
  }, [chainId, chains]);

  return chainImageSrc;
};

"use client";

import { useState, useEffect } from "react";
import { type Chain } from "viem";
import { useSwitchChain, useChainId } from "wagmi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

export const SwitchChain = () => {
  const { toast } = useToast();
  const chainId = useChainId();
  const { chains, switchChain, error, isPending } = useSwitchChain();
  const [isOpen, setIsOpen] = useState(false);
  const [connectedChain, setConnectedChain] = useState<Chain | null>(null);
  const [availableChains, setAvailableChains] = useState<Chain[]>([]);

  useEffect(() => {
    if (chainId) {
      const currentChain = chains.find((c) => c.id === chainId);
      setConnectedChain(currentChain || null);
      setAvailableChains([...chains].filter((c) => c.id !== chainId));
    } else {
      setConnectedChain(null);
      setAvailableChains([...chains]);
    }
  }, [chainId, chains]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Failed to switch chain",
        description: error.message,
        variant: "default",
        style: {
          background: "rgb(255, 255, 255)",
          color: "rgb(0, 0, 0)",
        },
      });
    }
  }, [error, toast]);

  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[40]" />
      )}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            disabled={isPending}
            variant="default"
            className="flex items-center justify-start gap-2 "
          >
            {connectedChain && (
              <Image
                src={`/icons/coins/${connectedChain.name.toLowerCase()}.png`}
                alt={`${connectedChain.name} icon`}
                width={16}
                height={16}
              />
            )}
            <span className="hidden sm:inline">
              {connectedChain ? connectedChain.name : "Select Chain"}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-50 p-2 space-y-2">
          {availableChains.map((c) => (
            <DropdownMenuItem
              key={c.id}
              className="flex items-center gap-4"
              onClick={() => {
                switchChain?.({ chainId: c.id });
                setIsOpen(false);
              }}
            >
              <Image
                src={`/icons/coins/${c.name.toLowerCase()}.png`}
                alt={`${c.name} icon`}
                width={16}
                height={16}
                className="mr-2"
              />
              {c.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

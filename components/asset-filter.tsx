"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const assetItems = [
  { value: "all", name: "All" },
  { value: "eth", name: "ETH", imageSrc: "/icons/coins/ethereum.png" },
  { value: "usdc", name: "USDC", imageSrc: "/icons/coins/usdc.png" },
  { value: "wsteth", name: "wstETH", imageSrc: "/icons/coins/wsteth.png" },
  { value: "arb", name: "ARB", imageSrc: "/icons/coins/arbitrum one.png" },
  { value: "gmx", name: "GMX", imageSrc: "/icons/coins/gmx.png" },
  { value: "wbtc", name: "wBTC", imageSrc: "/icons/coins/wbtc.png" },
  { value: "usdt", name: "USDT", imageSrc: "/icons/coins/usdt.png" },
];

const sortItems = [
  { value: "default", name: "Default" },
  { value: "tvl", name: "TVL" },
  { value: "apy", name: "APY" },
  { value: "dexTvl", name: "Dex TVL" },
];

export const AssetFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [asset, setAsset] = useState(searchParams.get("asset") || "all");
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort_by") || "default"
  );

  const updateURL = useCallback(
    (asset: string, sortBy: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (asset !== "all") params.set("asset", asset);
      else params.delete("asset");
      if (sortBy !== "default") params.set("sort_by", sortBy);
      else params.delete("sort_by");

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  useEffect(() => {
    updateURL(asset, sortBy);
  }, [asset, sortBy, updateURL]);

  const handleAssetChange = (value: string) => setAsset(value);
  const handleSortChange = (value: string) => setSortBy(value);

  return (
    <div className="flex flex-col 2xl:flex-row items-start gap-6 justify-between">
      <div className="flex items-center gap-4 w-full lg:w-auto">
        <p className="text-sm font-semibold text-primary">Assets:</p>
        <div className="hidden lg:block">
          <Tabs value={asset} onValueChange={handleAssetChange}>
            <TabsList>
              {assetItems.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="flex items-center gap-2 text-primary"
                >
                  {item.imageSrc && (
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      width={12}
                      height={20}
                    />
                  )}
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="lg:hidden w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between text-primary"
              >
                {assetItems.find((item) => item.value === asset)?.name ||
                  "All Assets"}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-primary">
              {assetItems.map((item) => (
                <DropdownMenuItem
                  key={item.value}
                  onClick={() => handleAssetChange(item.value)}
                >
                  {item.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full lg:w-auto">
        <p className="text-sm font-semibold text-primary w-auto lg:w-full">
          Sort by:
        </p>
        <div className="hidden lg:block">
          <Tabs value={sortBy} onValueChange={handleSortChange}>
            <TabsList>
              {sortItems.map((item) => (
                <TabsTrigger key={item.value} value={item.value} className="text-primary">
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="lg:hidden w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between text-primary"
              >
                {sortItems.find((item) => item.value === sortBy)?.name ||
                  "Default"}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {sortItems.map((item) => (
                <DropdownMenuItem
                  key={item.value}
                  onClick={() => handleSortChange(item.value)}
                >
                  {item.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

"use client";
import { HealthBar } from "@/components/portfolio/health-bar";
import { PortfolioData } from "@/components/portfolio/portfolio-data";
import { BorrowLend } from "@/components/portfolio/borrow-lend";
import { LeveragedFarming } from "@/components/portfolio/leveraged-farming";
import { Vaults } from "@/components/portfolio/vaults";
import { Separator } from "@/components/ui/separator";
import { useChainLogo } from "@/hooks/use-chain-logo";
import Image from "next/image";

export default function Page() {
  const chainImageSrc = useChainLogo();

  return (
    <div className="bg-card p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-6 shadow-2xl">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-primary text-lg font-semibold">Portfolio</h1>
          {chainImageSrc ? (
            <Image
              src={chainImageSrc}
              alt="Chain logo"
              width={20}
              height={20}
            />
          ) : null}
        </div>
        <p className="text-primary text-sm font-light">
          Track all of your positions in one place
        </p>
      </div>
      <PortfolioData />
      <HealthBar />
      <Separator />
      <BorrowLend />
      <LeveragedFarming />
      <Vaults />
    </div>
  );
}

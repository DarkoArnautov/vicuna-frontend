"use client";

import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BorrowData } from "@/types/borrow";
import { Input } from "@/components/ui/input";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import { Deposit } from "../icons/deposit";
import { Withdraw } from "../icons/withdraw";
import { ArrowRight, CheckCheck } from "lucide-react";

export const SupplyModal = ({
  borrow,
  children,
  defaultIsBorrow,
  isVisible,
  onClose,
}: {
  borrow: BorrowData;
  children: ReactNode;
  defaultIsBorrow: boolean;
  isVisible?: boolean;
  onClose?: () => void;
}) => {
  const [isBorrow, setIsBorrow] = useState<boolean>(
    defaultIsBorrow ? true : false
  );
  const [activeTab, setActiveTab] = useState(
    defaultIsBorrow ? "borrow" : "supply"
  );

  const toggleMode = (fromBorrow: boolean): void => {
    // update the active tab based on the current mode
    if (fromBorrow) {
      setActiveTab("supply");
    } else {
      setActiveTab("borrow");
    }

    // toggle the mode
    setIsBorrow(!isBorrow);
  };

  // Reset to default when the modal becomes visible
  React.useEffect(() => {
    console.log("USEEFFECT: ", isVisible);
    if (isVisible) {
      console.log("RESET");
      setIsBorrow(defaultIsBorrow);
      setActiveTab(defaultIsBorrow ? "borrow" : "supply");
    }
  }, [isVisible, defaultIsBorrow]);

  return (
    <Dialog onOpenChange={onClose}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-card text-primary overflow-y-auto pt-12">
        <button
          onClick={() => toggleMode(isBorrow)}
          className="z-10 place-self-start text-primary text-sm font-mdium underline"
        >
          {isBorrow ? "View Supply / Withdraw" : " View Borrow / Repay"}
        </button>
        <div className="flex flex-row items-center justify-center gap-4">
          <Image
            src={borrow.asset.imageSrc!}
            alt="logo"
            width={25}
            height={25}
          />
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm font-semibold">{borrow.asset.name}</span>
            <span className="text-xs font-light text-left">
              {borrow.asset.symbol}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src="/logo.svg"
            alt="Background Logo"
            objectFit="cover"
            className="opacity-10"
            width={500}
            height={500}
          />
        </div>
        <div className="relative z-10">
          <DialogHeader>
            <DialogTitle className="flex">
              {isBorrow ? (
                <Tabs
                  className="w-full h-12 bg-card"
                  value={activeTab}
                  onValueChange={setActiveTab}
                >
                  <TabsList className="grid w-full grid-cols-2 p-0 gap-0">
                    <TabsTrigger
                      value="borrow"
                      className="w-full text-lg data-[state=active]:bg-background data-[state=active]:text-primary bg-transparent h-12 shadow-none rounded-none border-b-0 border-l-0 border-r-0 border-t-2 border-t-transparent data-[state=inactive]:border-t-background"
                    >
                      Borrow
                    </TabsTrigger>
                    <TabsTrigger
                      value="repay"
                      className="w-full text-lg data-[state=active]:bg-background data-[state=active]:text-primary bg-transparent h-12 shadow-none rounded-none border-b-0 border-l-0 border-r-0 border-t-2 border-t-transparent data-[state=inactive]:border-t-background"
                    >
                      Repay
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              ) : (
                <Tabs
                  className="w-full h-12 bg-card"
                  value={activeTab}
                  onValueChange={setActiveTab}
                >
                  <TabsList className="grid w-full grid-cols-2 p-0 gap-0">
                    <TabsTrigger
                      value="supply"
                      className="w-full text-lg data-[state=active]:bg-background data-[state=active]:text-primary bg-transparent h-12 shadow-none rounded-none border-b-0 border-l-0 border-r-0 border-t-2 border-t-transparent data-[state=inactive]:border-t-background"
                    >
                      Supply
                    </TabsTrigger>
                    <TabsTrigger
                      value="withdraw"
                      className="w-full text-lg data-[state=active]:bg-background data-[state=active]:text-primary bg-transparent h-12 shadow-none rounded-none border-b-0 border-l-0 border-r-0 border-t-2 border-t-transparent data-[state=inactive]:border-t-background"
                    >
                      Withdraw
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              )}
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-8 pt-10 text-primary">
              <div className="flex items-center justify-between">
                <span>{isBorrow ? "Borrow Amount" : "Supply Amount"}</span>
                <div className="flex items-center gap-4">
                  Wallet Balance:{" "}
                  <span className="font-semibold">
                    {isBorrow ? "0" : "111.11"} {borrow.asset.symbol}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-8 pt-8">
                <div className="relative flex items-center">
                  <Button
                    size={"sm"}
                    className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
                  >
                    MAX
                  </Button>
                  <Input
                    className="bg-primary placeholder:text-accent text-right text-accent rounded-full pl-16 pr-4"
                    placeholder="$0.00"
                  />
                </div>
                <PercentageBar
                  onChange={(percentage) => console.log(percentage)}
                />
              </div>
              <p>{isBorrow ? "Borrow Stats" : "Supply Stats"}</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    {isBorrow ? "Borrow APY" : "Supply APY"}
                  </span>
                  <span>{isBorrow ? "6.34%" : "6.34%"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    {isBorrow ? "Borrow Balance" : "Supply Balance"}
                  </span>
                  <span>{isBorrow ? "$0.00" : "$0.00"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Reward APR</span>
                  <span>{isBorrow ? "0.47%" : "0.47%"}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="pb-4">Borrow Stats</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Your Borrow Limit</span>
                  <div className="flex items-center gap-2">
                    <span>$0</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>$0</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Borrow Limit Used</span>
                  <div className="flex items-center gap-2">
                    <span>0%</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>0%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-10">
                {isBorrow ? (
                  activeTab === "borrow" ? (
                    <>
                      <Button className="w-full flex items-center justify-center gap-2">
                        <CheckCheck className="w-5 h-5" />
                        Approve
                      </Button>
                      <Button className="w-full flex items-center justify-center gap-2">
                        <Deposit className="w-5 h-5" />
                        Borrow
                      </Button>
                    </>
                  ) : (
                    <Button className="w-full flex items-center justify-center gap-2">
                      <Withdraw className="w-5 h-5" />
                      Repay
                    </Button>
                  )
                ) : activeTab === "supply" ? (
                  <>
                    <Button className="w-full flex items-center justify-center gap-2">
                      <CheckCheck className="w-5 h-5" />
                      Approve
                    </Button>
                    <Button className="w-full flex items-center justify-center gap-2">
                      <Deposit className="w-5 h-5" />
                      Supply
                    </Button>
                  </>
                ) : (
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Withdraw className="w-5 h-5" />
                    Withdraw
                  </Button>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};
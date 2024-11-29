"use client";
import { useState, ReactNode } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FarmData } from "@/types/farm";
import { ExternalLinkIcon, ArrowRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "../ui/badge";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Tabs as Tabs2,
  TabsList as TabsList2,
  TabsTrigger as TabsTrigger2,
} from "../ui/tabs-two";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { DoubleAvatar } from "../ui/double-avatar";
import { cn } from "@/lib/utils";
import { MultiplierBar } from "../ui/multiplier-bar";
import { Summary } from "../icons/summary";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Deposit } from "../icons/deposit";

export const FarmModal = ({
  farm,
  children,
}: {
  farm: FarmData;
  children: ReactNode;
}) => {
  const { isDisconnected } = useAccount();
  const [summary, setSummary] = useState(false);
  const [leverage, setLeverage] = useState(farm.leverage);

  const increaseLeverage = () => {
    setLeverage((prev) => Math.min(prev + 1, 10));
  };

  const decreaseLeverage = () => {
    setLeverage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-card text-primary overflow-y-auto">
        <DialogHeader>
          <div className="grid place-items-center">
            <span>1/2 Steps</span>
            <div className="flex items-center justify-center w-44 gap-2 py-2">
              <span className="text-sm text-muted-foreground rounded-full bg-purple-500/30 px-3 py-1">
                1
              </span>
              <Separator className="flex-grow bg-primary py-0.5" />
              <span
                className={cn(
                  "text-sm text-muted-foreground rounded-full px-2.5 py-1",
                  summary
                    ? "bg-purple-500/30 border-none"
                    : "bg-white border border-primary"
                )}
              >
                2
              </span>
            </div>
          </div>
          <DialogTitle className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <DoubleAvatar
                firstSrc={farm.imageSrc1!}
                secondSrc={farm.imageSrc2!}
                firstAlt={farm.farmName!}
                secondAlt={farm.farmName!}
              />
              <span className="text-md">Farm {farm.farmName} Pool</span>
            </div>
            {!summary && (
              <Tabs2 defaultValue={farm.tokenSymbol2}>
                <TabsList2>
                  <TabsTrigger2 value={farm.tokenSymbol1!} className="gap-2">
                    <Image
                      src={farm.imageSrc1!}
                      alt={farm.tokenSymbol1!}
                      width={10}
                      height={10}
                    />
                    {farm.tokenSymbol1}
                  </TabsTrigger2>
                  <TabsTrigger2 value={farm.tokenSymbol2!} className="gap-2">
                    <Image
                      src={farm.imageSrc2!}
                      alt={farm.tokenSymbol2!}
                      width={14}
                      height={14}
                    />
                    {farm.tokenSymbol2}
                  </TabsTrigger2>
                </TabsList2>
              </Tabs2>
            )}
          </DialogTitle>
          <Separator />
          <DialogDescription className="flex flex-col gap-8 pt-4">
            {summary ? (
              <>
                <div className="flex items-center justify-between text-lg text-primary">
                  <div className="flex flex-col items-start gap-2">
                    <p>Total APR</p>
                    <div className="flex items-center gap-2">
                      <span>59.8%</span>
                      <ArrowRightIcon className="w-4 h-4 text-primary" />
                      <span className="text-green-500">113%</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p>Total APY</p>
                    <div className="flex items-center gap-2">
                      <span>81.8%</span>
                      <ArrowRightIcon className="w-4 h-4 text-primary" />
                      <span className="text-green-500">166%</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p>Daily APR</p>
                    <div className="flex items-center gap-2">
                      <span>59.8%</span>
                      <ArrowRightIcon className="w-4 h-4 text-primary" />
                      <span className="text-green-500">113%</span>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-primary">
                    <span>Price Impact</span>
                    <span className="text-green-500">0.00%</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Swap Cost (0.03% fee rate on AMM)</span>
                    <span className="text-background">0.01% ($7.50)</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Liquidation Prices (est.)</span>
                    <span className="flex items-center gap-2">
                      <DoubleAvatar
                        firstSrc={farm.imageSrc2!}
                        secondSrc={farm.imageSrc1!}
                        firstAlt={farm.tokenSymbol2!}
                        secondAlt={farm.tokenSymbol1!}
                        size="small"
                      />
                      <span>
                        1 {farm.tokenSymbol1} - 3019.01 {farm.tokenSymbol2}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Net Exposure</span>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        Long
                        <Avatar className="bg-primary p-0.5 w-4 h-4">
                          <AvatarImage
                            src={farm.imageSrc1!}
                            className="object-cover p-0.5"
                          />
                          <AvatarFallback>{farm.tokenSymbol1}</AvatarFallback>
                        </Avatar>{" "}
                        1.2 {farm.tokenSymbol1}
                      </div>
                      <div className="flex items-center gap-2">
                        Long
                        <Avatar className="bg-primary p-0.5 w-4 h-4">
                          <AvatarImage
                            src={farm.imageSrc2!}
                            className="object-cover"
                          />
                          <AvatarFallback>{farm.tokenSymbol2}</AvatarFallback>
                        </Avatar>{" "}
                        1.2 {farm.tokenSymbol2}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-primary">
                    <span>Leverage</span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Asset to Supply</span>
                    <span className="flex items-center gap-1">
                      <Avatar className="w-4 h-4">
                        <AvatarImage
                          src={farm.imageSrc1}
                          alt={farm.tokenSymbol1}
                        />
                      </Avatar>
                      1.2 {farm.tokenSymbol1} +
                      <Avatar className="w-4 h-4">
                        <AvatarImage
                          src={farm.imageSrc2}
                          alt={farm.tokenSymbol2}
                        />
                      </Avatar>
                      0 {farm.tokenSymbol2}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Asset to Borrow</span>
                    <span className="flex items-center gap-1">
                      <Avatar className="w-4 h-4">
                        <AvatarImage
                          src={farm.imageSrc1}
                          alt={farm.tokenSymbol1}
                        />
                      </Avatar>
                      0 {farm.tokenSymbol1} +
                      <Avatar className="w-4 h-4">
                        <AvatarImage
                          src={farm.imageSrc2}
                          alt={farm.tokenSymbol2}
                        />
                      </Avatar>
                      0 {farm.tokenSymbol2}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-primary">
                    <span>Total Position</span>
                    <span className="flex items-center gap-1">
                      <Avatar className="w-4 h-4">
                        <AvatarImage
                          src={farm.imageSrc1}
                          alt={farm.tokenSymbol1}
                        />
                      </Avatar>
                      1.2 {farm.tokenSymbol1} +
                      <Avatar className="w-4 h-4">
                        <AvatarImage
                          src={farm.imageSrc2}
                          alt={farm.tokenSymbol2}
                        />
                      </Avatar>
                      1200 {farm.tokenSymbol2}
                    </span>
                  </div>
                </div>
                <Tabs2 defaultValue={farm.tokenSymbol2}>
                  <TabsList2>
                    <TabsTrigger2 value={farm.tokenSymbol1!} className="gap-2">
                      <Image
                        src={farm.imageSrc1!}
                        alt={farm.tokenSymbol1!}
                        width={10}
                        height={10}
                      />
                      {farm.tokenSymbol1}
                    </TabsTrigger2>
                    <TabsTrigger2 value={farm.tokenSymbol2!} className="gap-2">
                      <Image
                        src={farm.imageSrc2!}
                        alt={farm.tokenSymbol2!}
                        width={14}
                        height={14}
                      />
                      {farm.tokenSymbol2}
                    </TabsTrigger2>
                  </TabsList2>
                </Tabs2>
                <p>{farm.tokenSymbol2} Borrowing Interest: 33%</p>
                <Button>
                  <Deposit className="w-4 h-4 mr-2" />
                  Confirm
                </Button>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-lg">Deposit</span>
                    <Tabs defaultValue="assets">
                      <TabsList>
                        <TabsTrigger value="assets" className="h-6">
                          Assets
                        </TabsTrigger>
                        <TabsTrigger value="lp" className="h-6">
                          LP
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <span className="flex items-center gap-2">
                    Swap <ExternalLinkIcon className="w-4 h-4 text-primary" />
                  </span>
                </div>
                <div className="flex flex-col gap-2 pt-8">
                  <span className="font-semibold">Available: 0</span>
                  <div className="relative flex items-center">
                    <Button
                      size={"sm"}
                      className="absolute left-2 h-6 z-10 bg-purple-200 hover:bg-purple-300 text-primary"
                    >
                      MAX
                    </Button>
                    <Input
                      className="bg-primary placeholder:text-accent text-right text-accent rounded-full pl-16 pr-[5.2rem]"
                      placeholder="$0.00"
                    />
                    <Badge
                      variant="accent"
                      className="absolute rounded-full right-2 px-1 flex items-center gap-2"
                    >
                      <Image
                        src={farm.imageSrc1!}
                        alt={farm.tokenSymbol1!}
                        width={10}
                        height={10}
                      />
                      {farm.tokenSymbol1}
                    </Badge>
                  </div>
                  <PercentageBar
                    onChange={(percentage) => console.log(percentage)}
                  />
                </div>
                <div className="mt-2 justify-center  place-items-center grid">
                  <div className="flex items-center gap-4">
                    <Separator className="w-12 bg-primary" />
                    <span>And/Or</span>
                    <Separator className="w-12 bg-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <span className="font-semibold">Available: 0</span>
                  <div className="relative flex items-center">
                    <Button
                      size={"sm"}
                      className="absolute left-2 h-6 z-10 bg-purple-200 hover:bg-purple-300 text-primary"
                    >
                      MAX
                    </Button>
                    <Input
                      className="bg-primary placeholder:text-accent text-right text-accent rounded-full pl-16 pr-[5.2rem]"
                      placeholder="$0.00"
                    />
                    <Badge
                      variant="accent"
                      className="absolute rounded-full right-2 px-1 flex items-center gap-2"
                    >
                      <Image
                        src={farm.imageSrc2!}
                        alt={farm.tokenSymbol2!}
                        width={10}
                        height={10}
                      />
                      {farm.tokenSymbol2}
                    </Badge>
                  </div>
                  <PercentageBar
                    onChange={(percentage) => console.log(percentage)}
                  />
                </div>
                <Separator />
                <div className="flex flex-col">
                  <MultiplierBar />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Asset to Borrow</span>
                  <div className="flex items-center gap-2">
                    <span>Dual Borrow</span>
                    <Switch />
                  </div>
                </div>
                <Tabs2 defaultValue={farm.tokenSymbol2}>
                  <TabsList2>
                    <TabsTrigger2 value={farm.tokenSymbol1!} className="gap-2">
                      <Image
                        src={farm.imageSrc1!}
                        alt={farm.tokenSymbol1!}
                        width={10}
                        height={10}
                      />
                      {farm.tokenSymbol1}
                    </TabsTrigger2>
                    <TabsTrigger2 value={farm.tokenSymbol2!} className="gap-2">
                      <Image
                        src={farm.imageSrc2!}
                        alt={farm.tokenSymbol2!}
                        width={14}
                        height={14}
                      />
                      {farm.tokenSymbol2}
                    </TabsTrigger2>
                  </TabsList2>
                </Tabs2>
                <p>{farm.tokenSymbol2} Borrowing Interest: 33%</p>
                <Button
                  onClick={() => setSummary(true)}
                  className="flex items-center gap-2"
                >
                  <Summary className="w-5 h-5" />
                  Go to Summary
                </Button>
              </>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import { Wallet2 } from "../icons/wallet-2";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const LPStaking = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          <span>LP Staking</span>
          <Button size="icon" variant="ghost">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <p className="text-3xl font-semibold">ViFi - ETH veLP</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Balance</p>
              <p className="text-lg font-medium">0</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light flex flex-row items-center gap-2">
                ve Balance <Wallet2 className="w-4 h-4" />
              </p>
              <p className="text-lg font-medium">12</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Locked Amount</p>
              <p className="text-lg font-medium">12.25</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Total Locked Amount</p>
              <p className="text-lg font-medium">17.45</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Pending Rewards</p>
              <div className="text-lg font-medium flex flex-row items-center gap-2">
                <p>0.0141</p>
                <Avatar className="w-9 h-9 bg-background p-1">
                  <AvatarImage
                    src="/icons/coins/ethereum.png"
                    className="object-contain"
                  />
                  <AvatarFallback>ETH</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-lg font-medium flex flex-row items-center gap-2">
                <p>124.58</p>
                <Avatar>
                  <AvatarImage src="/logo.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Locking APR</p>
              <p className="text-lg font-medium">120%</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-evenly gap-4">
            <Button className="w-full">Claim</Button>
            <Button className="w-full">Auto Compound LP</Button>
            <Button className="w-full">Stake</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

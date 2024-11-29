"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { XIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { DoubleAvatar } from "../ui/double-avatar";
import { Summary } from "../icons/summary";

export const CloseModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"sm"}>
          <XIcon className="w-4 h-4 mr-2" />
          Close
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card text-primary overflow-y-auto">
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle className="flex items-center gap-10">
            <span>
              <DoubleAvatar
                firstSrc={"icons/coins/usdc.png"}
                secondSrc={"icons/coins/ethereum.png"}
                firstAlt="ETH"
                secondAlt="USDC"
              />
            </span>
            <span className="text-lg">Close ETH-USDC Position</span>
          </DialogTitle>
          <Separator />
          <div className="flex items-center justify-between">
            <Button size={"sm"}>Withdraw All</Button>
            <Button size={"sm"}>
              Withdraw as
              <Avatar className="w-4 h-4 bg-background p-0.5 mx-1">
                <AvatarImage
                  src="icons/coins/ethereum.png"
                  alt="ETH"
                  className="object-contain"
                />
                <AvatarFallback>ETH</AvatarFallback>
              </Avatar>
              ETH
            </Button>
            <Button size={"sm"}>
              Withdraw as
              <Avatar className="w-4 h-4 bg-background p-0.5 mx-1">
                <AvatarImage
                  src="icons/coins/usdc.png"
                  alt="USDC"
                  className="object-contain"
                />
                <AvatarFallback>USDC</AvatarFallback>
              </Avatar>
              USDC
            </Button>
          </div>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-10 pt-4">
          <div className="flex flex-col gap-4 pt-8">
            <span>Available: 0</span>
            <div className="relative flex items-center">
              <Button
                size={"sm"}
                className="absolute left-2 h-6 z-10 bg-purple-200 hover:bg-purple-300 text-primary"
              >
                MAX
              </Button>
              <Input
                className="bg-primary text-right text-accent placeholder:text-accent rounded-full pl-16 pr-5"
                placeholder="$0.00"
              />
            </div>
            <PercentageBar onChange={(percentage) => console.log(percentage)} />
          </div>
          <div className="flex flex-col gap-4 font-semibold">
            <div className="flex items-center justify-between">
              <span>Updated Assets in Position:</span>
              <p className="flex items-center gap-2">
                <Avatar className="w-6 h-6 bg-primary p-0.5">
                  <AvatarImage
                    src="icons/coins/ethereum.png"
                    alt="ETH"
                    className="object-contain"
                  />
                  <AvatarFallback>ETH</AvatarFallback>
                </Avatar>
                <span>1 ETH</span>
                <span>+</span>
                <Avatar className="w-6 h-6 bg-primary p-0.5">
                  <AvatarImage
                    src="icons/coins/usdc.png"
                    alt="USDC"
                    className="object-contain"
                  />
                  <AvatarFallback>USDC</AvatarFallback>
                </Avatar>
                <span>1 USDC</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span>Updated Debt Value:</span>
              <p className="flex items-center gap-2">
                <Avatar className="w-6 h-6 bg-primary p-0.5">
                  <AvatarImage
                    src="icons/coins/ethereum.png"
                    alt="ETH"
                    className="object-contain"
                  />
                  <AvatarFallback>ETH</AvatarFallback>
                </Avatar>
                <span>0 ETH</span>
                <span>+</span>
                <Avatar className="w-6 h-6 bg-primary p-0.5">
                  <AvatarImage
                    src="icons/coins/usdc.png"
                    alt="USDC"
                    className="object-contain"
                  />
                  <AvatarFallback>USDC</AvatarFallback>
                </Avatar>
                <span>0 USDC</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span>You will receive (approx):</span>
              <p className="flex items-center gap-2">
                <Avatar className="w-6 h-6 bg-primary p-0.5">
                  <AvatarImage
                    src="icons/coins/ethereum.png"
                    alt="ETH"
                    className="object-contain"
                  />
                  <AvatarFallback>ETH</AvatarFallback>
                </Avatar>
                <span>1.2 ETH</span>
                <span>+</span>
                <Avatar className="w-6 h-6 bg-primary p-0.5">
                  <AvatarImage
                    src="icons/coins/usdc.png"
                    alt="USDC"
                    className="object-contain"
                  />
                  <AvatarFallback>USDC</AvatarFallback>
                </Avatar>
                <span>1200 USDC</span>
              </p>
            </div>
          </div>
          <Button className="w-full flex items-center justify-center">
            <Summary className="w-6 h-6 mr-2" />
            Close Position
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

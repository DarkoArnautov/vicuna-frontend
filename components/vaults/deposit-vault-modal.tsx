"use client";

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
import { VaultData } from "@/types/vault";
import { ExternalLinkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { InfoTooltip } from "@/components/ui/info-tooltip";
import { PercentageBar } from "@/components/ui/percentage-bar";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { Deposit } from "@/components/icons/deposit";

export const DepositVaultModal = ({
  vault,
  children,
}: {
  vault: VaultData;
  children?: React.ReactNode;
}) => {
  const { isDisconnected } = useAccount();
  return (
    <Dialog>
      <DialogTrigger>
        {children ? (
          children
        ) : (
          <Button disabled={isDisconnected}>Deposit</Button>
        )}
      </DialogTrigger>
      <DialogContent className="bg-card text-primary">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-6 pb-10">
            <DoubleAvatar
              firstSrc={vault?.imageSrc1!}
              secondSrc={vault?.imageSrc2!}
              firstAlt={vault?.vaultName!}
              secondAlt={vault?.vaultName!}
            />{" "}
            Deposit to {vault?.vaultName} Vault
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-8 text-primary">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Deposit</span>
              <span className="flex items-center gap-2 font-semibold  ">
                Add Liquidity{" "}
                <ExternalLinkIcon className="w-4 h-4 text-primary" />
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-8">
              <span className="font-semibold">Available: 0</span>
              <div className="relative flex items-center">
                <Button
                  size={"sm"}
                  className="absolute left-2 h-6 z-10 bg-purple-200 text-primary"
                >
                  MAX
                </Button>
                <Input
                  className="bg-primary placeholder:text-accent text-right text-accent rounded-2xl pl-16 pr-[8.1rem]"
                  placeholder="$0.00"
                />
                <div className="absolute right-2 flex items-center">
                  <Badge
                    variant="accent"
                    className="rounded-lg flex items-center gap-2 px-1"
                  >
                    <DoubleAvatar
                      firstSrc={vault?.imageSrc1!}
                      secondSrc={vault?.imageSrc2!}
                      firstAlt={vault?.vaultName!}
                      secondAlt={vault?.vaultName!}
                      size={"small"}
                    />

                    {vault.vaultName}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <PercentageBar
                onChange={(percentage) => console.log(percentage)}
              />
            </div>
            <div className="flex flex-col gap-2 border border-background text-xs rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  Deposit Fee{" "}
                  <InfoTooltip>
                    The fee is deducted from the deposit amount and added to the
                    vault.
                  </InfoTooltip>{" "}
                </span>
                <span>0%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  Withdrawal Fee
                  <InfoTooltip>
                    The fee is deducted from the withdrawal amount and added to
                    the vault.
                  </InfoTooltip>
                </span>
                <span>0%</span>
              </div>
              <p className="text-xs">
                The displayed APY accounts for performance fee{" "}
                <InfoTooltip>
                  The fee is deducted from the withdrawal amount and added to
                  the vault.
                </InfoTooltip>{" "}
                that is deducted from the generated yield only.
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <Deposit className="w-5 h-5" /> Deposit
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

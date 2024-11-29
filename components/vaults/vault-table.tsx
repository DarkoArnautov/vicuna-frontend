"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { formatNumberWithSuffix } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { vaultData } from "@/lib/constants";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAccount } from "wagmi";
import { AssetFilter } from "../asset-filter";
import { DepositVaultModal } from "./deposit-vault-modal";
import { WithdrawVaultModal } from "./withdraw-vault-modal";
import { FilterIcon } from "../icons/filter";

export const VaultTable = () => {
  const { address } = useAccount();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [vault, setVault] = useState(searchParams.get("vault") || "all");

  const updateURL = useCallback(
    (vault: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (vault !== "all") params.set("vault", vault);
      else params.delete("vault");

      router.push(`/vaults?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  useEffect(() => {
    updateURL(vault);
  }, [vault, updateURL]);

  const handleVaultChange = (value: string) =>
    setVault(value === "personal" ? address || "all" : value);

  return (
    <div className="p-4">
      <AssetFilter />
      <Table>
        <TableHeader className="border-b border-background">
          <TableHead className="flex items-center gap-4 h-24 font-bold text-base ">
            Vaults
            <div className="flex items-center gap-4 justify-center">
              <Tabs value={vault} onValueChange={handleVaultChange}>
                <TabsList>
                  <TabsTrigger value="all" className="text-primary">
                    All Vaults
                  </TabsTrigger>
                  <TabsTrigger value="personal" className="text-primary">
                    My Vaults
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </TableHead>
          <TableHead className="text-muted uppercase">
            <div className="flex items-center gap-2">
              Wallet <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted uppercase">
            <div className="flex items-center gap-2">
              Deposited <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted uppercase">
            <div className="flex items-center gap-2">
              APY <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted uppercase">
            <div className="flex items-center gap-2">
              Daily <FilterIcon />
            </div>
          </TableHead>
          <TableHead></TableHead>
        </TableHeader>
        <TableBody>
          {vaultData.map((vault, index) => (
            <TableRow key={index} className="text-primary border-t-background">
              <TableCell>
                <div className="flex items-center  gap-10">
                  <DoubleAvatar
                    firstSrc={vault.imageSrc1!}
                    secondSrc={vault.imageSrc2!}
                    firstAlt={vault.vaultName}
                    secondAlt={vault.vaultName}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg ">{vault.vaultName}</p>
                    <p className="text-sm font-light">
                      TVL: {formatNumberWithSuffix(vault.vaultTVL)}
                    </p>
                    <p className="text-sm font-light">
                      Dex TVL: {formatNumberWithSuffix(vault.vaultDexTVL)}
                    </p>
                    {vault.vBoost && (
                      <Badge
                        variant={"accent"}
                        className="flex items-center justify-between"
                      >
                        <Image
                          src="/logo.svg"
                          alt="V-Boost"
                          width={16}
                          height={16}
                        />
                        V-Boost
                      </Badge>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>{vault.wallets}</TableCell>
              <TableCell>{vault.deposited}</TableCell>
              <TableCell className="text-green-500">{vault.apy}%</TableCell>
              <TableCell>{vault.daily}%</TableCell>
              <TableCell className="flex gap-10 justify-center pt-10">
                <DepositVaultModal vault={vault} />
                <WithdrawVaultModal vault={vault} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

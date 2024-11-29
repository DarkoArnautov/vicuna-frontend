import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusIcon, X } from "lucide-react";
import { DoubleAvatar } from "../ui/double-avatar";
import { DepositVaultModal } from "../vaults/deposit-vault-modal";
import { WithdrawVaultModal } from "../vaults/withdraw-vault-modal";
import { vaultData } from "@/lib/constants";

export const Vaults = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p className="text-xl">Vaults</p>
          <div className="flex items-center justify-center gap-4 text-sm font-normal">
            <p>
              Net Value: <span className="px-1 font-semibold">$992.99</span>
            </p>
            <p>
              Total Interest:{" "}
              <span className="px-1 font-semibold text-green-400">$13.02</span>
            </p>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="w-full  flex flex-col lg:flex-row items-center">
        <Table className="lg:table-fixed">
          <TableHeader>
            <TableRow className="border-none">
              <TableHead>Collateral</TableHead>
              <TableHead>Net Value</TableHead>
              <TableHead>TVL</TableHead>
              <TableHead>Interest Earned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <DoubleAvatar
                  firstSrc="/icons/coins/ethereum.png"
                  secondSrc="/icons/coins/arbitrum one.png"
                  firstAlt="ETH"
                  secondAlt="ARB"
                  size="default"
                />
              </TableCell>
              <TableCell>$992.92</TableCell>
              <TableCell>$12,304,341.00</TableCell>
              <TableCell>+ $17.01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex items-end lg:items-center justify-end lg:justify-center gap-4 pt-2 lg:pt-0">
          <DepositVaultModal vault={vaultData[0]}>
            <Button size={"sm"}>
              <PlusIcon className="w-4 h-4 mr-2" />
              Add
            </Button>
          </DepositVaultModal>
          <WithdrawVaultModal vault={vaultData[0]}>
            <Button size={"sm"}>
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </WithdrawVaultModal>
        </div>
      </CardContent>
    </Card>
  );
};

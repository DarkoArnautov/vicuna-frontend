"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { formatNumberWithSuffix } from "@/lib/utils";
import { borrowData } from "@/lib/constants";
import { SupplyModal } from "./supply-modal";
import { FilterIcon } from "../icons/filter";

export const BorrowTable = () => {
  return (
    <div className="p-4">
      <Table>
        <TableHeader className="h-8 border-b border-background">
          <TableHead className="text-muted">
            <div className="flex items-center gap-2">
              Asset <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted">
            <div className="flex items-center gap-2">
              Total Supplied <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted">
            <div className="flex items-center gap-2">
              Supply APY <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted">
            <div className="flex items-center gap-2">
              Total Borrowed <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted">
            <div className="flex items-center gap-2">
              Borrow APY, Variable <FilterIcon />
            </div>
          </TableHead>
        </TableHeader>
        <TableBody>
          {borrowData.map((asset, index) => (
            <SupplyModal key={index} borrow={asset} defaultIsBorrow={false}>
              <TableRow className="text-primary border-t-background cursor-pointer hover:bg-background/50">
                <TableCell>
                  <div className="flex items-center gap-10">
                    <Avatar className="bg-transparent  p-1.5">
                      <AvatarImage
                        src={asset.asset.imageSrc!}
                        className="object-contain"
                      />
                      <AvatarFallback>{asset.asset.symbol}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-md font-semibold">
                        {asset.asset.name}
                      </p>
                      <p className="text-xs font-light">{asset.asset.symbol}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="flex flex-col">
                  <p className="text-md">
                    {formatNumberWithSuffix(asset.totalSupplied.amount)}
                  </p>
                  <p className="text-xs font-light">
                    {formatNumberWithSuffix(asset.totalSupplied.value)}
                  </p>
                </TableCell>
                <TableCell>{asset.supplyAPY}%</TableCell>
                <TableCell className="flex flex-col">
                  <p className="text-md">
                    {formatNumberWithSuffix(asset.totalBorrowed.amount)}
                  </p>
                  <p className="text-xs font-light">
                    {formatNumberWithSuffix(asset.totalBorrowed.value)}
                  </p>
                </TableCell>
                <TableCell>{asset.borrowAPY}%</TableCell>
              </TableRow>
            </SupplyModal>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

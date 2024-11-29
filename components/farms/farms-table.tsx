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
import { formatNumberWithSuffix } from "@/lib/utils";
import { farmsData } from "@/lib/constants";
import { AssetFilter } from "../asset-filter";
import { FarmModal } from "./farm-modal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DoubleAvatar } from "@/components/ui/double-avatar";
import { ChevronUp, ChevronDown } from "lucide-react";
import { FilterIcon } from "../icons/filter";
import { Fire } from "../icons/fire";
import { ChainBookmark } from "../icons/chain-bookmark";

export const FarmsTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [farm, setFarm] = useState(searchParams.get("farm") || "all");

  const updateURL = useCallback(
    (farm: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (farm !== "all") params.set("farm", farm);
      else params.delete("farm");

      router.push(`/farms?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  useEffect(() => {
    updateURL(farm);
  }, [farm, updateURL]);

  const [leverages, setLeverages] = useState<{ [key: string]: number }>({});

  const increaseLeverage = (farmId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLeverages((prev) => ({
      ...prev,
      [farmId]: Math.min((prev[farmId] || 1) + 0.5, 10),
    }));
  };

  const decreaseLeverage = (farmId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLeverages((prev) => ({
      ...prev,
      [farmId]: Math.max((prev[farmId] || 1) - 0.5, 1),
    }));
  };

  return (
    <div className="p-4">
      <AssetFilter />
      <Table>
        <TableHeader className="h-24 border-b border-background">
          <TableHead className="font-bold text-primary text-lg">
            Leveraged Farming
          </TableHead>
          <TableHead className="text-muted">
            <div className="flex items-center gap-2">
              APY <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted">
            <div className="flex items-center gap-2">
              APR <FilterIcon />
            </div>
          </TableHead>
          <TableHead className="text-muted text-center">Leverage</TableHead>
        </TableHeader>
        <TableBody>
          {farmsData.map((farm, index) => (
            <FarmModal key={index} farm={farm}>
              <TableRow className="text-primary border-t-background cursor-pointer hover:bg-background/50 relative">
                <TableCell>
                  <div className="absolute top-0 left-1">
                    <ChainBookmark src={farm.chainImageSrc!} />
                  </div>
                  <div className="flex items-center gap-10">
                    <DoubleAvatar
                      firstSrc={farm.imageSrc1!}
                      secondSrc={farm.imageSrc2!}
                      firstAlt={farm.farmName!}
                      secondAlt={farm.farmName!}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-lg ">{farm.farmName}</p>
                      <p className="text-sm font-light">
                        TVL: {formatNumberWithSuffix(farm.farmTVL)}
                      </p>
                      <p className="text-sm font-light">
                        Dex TVL: {formatNumberWithSuffix(farm.farmDexTVL)}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-2">
                    From {farm.apy.from}% to{" "}
                    <span className="text-green-500 text-base flex items-center gap-8">
                      {farm.apy.to}% {farm.trending && <Fire />}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="lg:hidden">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="apr-details">
                        <AccordionTrigger>View APR Details</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-2">
                            <span className="text-primary flex flex-col items-start justify-between">
                              <span>Yield Farming:</span>
                              <span>{farm.apr.yield_percentage}%</span>
                            </span>
                            <span className="text-primary flex flex-col items-start justify-between">
                              <span>Token Borrowing Interest:</span>
                              <div className="flex flex-row items-center gap-2">
                                <DoubleAvatar
                                  firstSrc={farm.imageSrc1!}
                                  secondSrc={farm.imageSrc2!}
                                  firstAlt={farm.farmName!}
                                  secondAlt={farm.farmName!}
                                  size="small"
                                />
                                <span className="font-semibold">
                                  {farm.farmName} -
                                  {farm.apr.token_borrowing_interest}%
                                </span>
                              </div>
                            </span>
                            <span className="text-primary flex flex-col items-start justify-between">
                              <span>Total APR:</span>
                              <span className="font-semibold">
                                {farm.apr.total_apr}%
                              </span>
                            </span>
                            <span className="text-primary flex flex-col items-start justify-between">
                              <span>Daily APR:</span>
                              <span>{farm.apr.daily_apr}%</span>
                            </span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex flex-col border border-background rounded-md p-2 gap-2">
                      <span className="text-primary flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <span>Yield Farming:</span>
                        <span>{farm.apr.yield_percentage}%</span>
                      </span>
                      <span className="text-primary flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <span>Token Borrowing Interest:</span>
                        <div className="flex flex-row items-center gap-2">
                          <DoubleAvatar
                            firstSrc={farm.imageSrc1!}
                            secondSrc={farm.imageSrc2!}
                            firstAlt={farm.farmName!}
                            secondAlt={farm.farmName!}
                            size="small"
                          />
                          <span className="font-semibold">
                            {farm.farmName} -{farm.apr.token_borrowing_interest}
                            %
                          </span>
                        </div>
                      </span>
                      <span className="text-primary flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <span>Total APR:</span>
                        <span className="font-semibold">
                          {farm.apr.total_apr}%
                        </span>
                      </span>
                      <span className="text-primary flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <span>Daily APR:</span>
                        <span>{farm.apr.daily_apr}%</span>
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-lg">
                      {leverages[farm.farmName] || farm.leverage}x
                    </span>
                    <div className="flex flex-col text-primary">
                      <ChevronUp
                        className="w-4 h-4 cursor-pointer"
                        onClick={(e) => increaseLeverage(farm.farmName, e)}
                      />
                      <ChevronDown
                        className="w-4 h-4 cursor-pointer"
                        onClick={(e) => decreaseLeverage(farm.farmName, e)}
                      />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </FarmModal>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

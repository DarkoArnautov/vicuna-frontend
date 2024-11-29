"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import Image from "next/image";

export const PresaleModal = () => {
    const [availableCoins, setAvailableCoins] = useState<string[]>(["USDC", "USDT"]);
    const [isOpen, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>("USDC");

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (coin: string) => {
        if (selectedItem != coin) {
            setSelectedItem(coin);
            setOpen(false);
        }
    }

    const [selectedMode, setSelectedMode] = useState<string>("vested");

    const [selectedLockTime, setSelectedLockTime] = useState<string>("7");

    const handleModeChange = (
        value: string
    ) => {
        setSelectedMode(value);
    };

    const handleLockTimeChange = (
        value: string
    ) => {
        setSelectedLockTime(value);
    };
    <Badge
        variant="accent"
        className="absolute rounded-full right-2 px-1 flex items-center gap-2"
    >
        {/* <Image
                    src={farm.imageSrc1!}
                    alt={farm.tokenSymbol1!}
                    width={10}
                    height={10}
                />
                {farm.tokenSymbol1} */}
    </Badge>
    return (
        <div className="relative flex flex-col items-center">
            <div className="relative flex items-center w-full mb-6">
                <Button
                    size={"sm"}
                    className="absolute left-2 h-6 z-10 bg-purple-200 hover:bg-purple-300 text-primary"
                >
                    MAX
                </Button>
                <Input
                    className="bg-primary placeholder:text-accent text-right text-accent rounded-full pl-16 pr-[5.5rem]"
                    placeholder="$0.00"
                />
                <div className='absolute right-2 h-6 z-10 bg-purple-200 hover:bg-purple-300 text-primary rounded-full'>
                    <div className='flex flex-row items-center cursor-pointer px-2' onClick={toggleDropdown}>
                        <Image
                            src={`/icons/coins/${selectedItem.toLowerCase()}.png`}
                            alt={selectedItem}
                            width={15}
                            height={15}
                        />
                        {selectedItem}
                    </div>
                    {
                        isOpen && (
                            <div className={`bg-purple-200 rounded px-2 mt-1 cursor-pointer`}>
                                {availableCoins.map((item, index) => (
                                    <div className="flex flex-row items-center" onClick={e => handleItemClick(e.target.id)} id={item} key={index}>
                                        <Image
                                            src={`/icons/coins/${item.toLowerCase()}.png`}
                                            alt={selectedItem}
                                            width={15}
                                            height={15}
                                        />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="relative flex items-center gap-2 w-full">
                <Input
                    className="bg-primary placeholder:text-accent text-left text-accent rounded-full pl-16 pr-[5.2rem] w-1/2"
                    placeholder="Insert referal code"
                />
                <Button className="w-1/2">Get Referal Code</Button>
            </div>
            <div className="mt-4 justify-center  place-items-center grid">
                <div className="flex items-center gap-4">
                    <Separator className="w-12 bg-primary" />
                    <span className="text-primary">Choose Presale Mode</span>
                    <Separator className="w-12 bg-primary" />
                </div>
            </div>
            <div className="mt-4 justify-center  place-items-center w-full">
                <fieldset className="w-full">
                    <div>
                        <input
                            type="radio"
                            id="vested"
                            name="mode"
                            value="vested"
                            checked={
                                selectedMode ===
                                "vested"
                            }
                            onChange={() =>
                                handleModeChange(
                                    "vested"
                                )
                            }
                        />
                        <label htmlFor="vested" className="text-primary ml-2">Vested - 25% Unlocked on TG, 75% Vested</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="full"
                            name="mode"
                            value="full"
                            checked={
                                selectedMode ===
                                "full"
                            }
                            onChange={() =>
                                handleModeChange(
                                    "full"
                                )
                            }
                        />
                        <label htmlFor="full" className="text-primary ml-2">Full Ve - 100% Ve Position, locked</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="hybrid"
                            name="mode"
                            value="hybrid"
                            checked={
                                selectedMode ===
                                "hybrid"
                            }
                            onChange={() =>
                                handleModeChange(
                                    "hybrid"
                                )
                            }
                        />
                        <label htmlFor="hybrid" className="text-primary ml-2">Hybrid - 25% Unlocked on TG, 75% Ve locked</label>
                    </div>
                </fieldset>
            </div>
            {
                (selectedMode === "full" || selectedMode === "hybrid") && (
                    <>
                        <div className="mt-4 justify-center  place-items-center grid">
                            <div className="flex items-center gap-4">
                                <Separator className="w-12 bg-primary" />
                                <span className="text-primary">Choose VE Lock Time</span>
                                <Separator className="w-12 bg-primary" />
                            </div>
                        </div>
                        <div className="mt-4 justify-center  place-items-center w-full">
                            <fieldset className="w-full flex flex-wrap">
                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="7"
                                        name="time"
                                        value="7"
                                        checked={
                                            selectedLockTime === "7"
                                        }
                                        onChange={() =>
                                            handleLockTimeChange(
                                                "7"
                                            )
                                        }
                                    />
                                    <label htmlFor="7" className="text-primary ml-2">7 Months Lock</label>
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="12"
                                        name="time"
                                        value="12"
                                        checked={
                                            selectedLockTime ===
                                            "12"
                                        }
                                        onChange={() =>
                                            handleLockTimeChange(
                                                "12"
                                            )
                                        }
                                    />
                                    <label htmlFor="12" className="text-primary ml-2">12 Months Lock</label>
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="18"
                                        name="time"
                                        value="18"
                                        checked={
                                            selectedLockTime ===
                                            "18"
                                        }
                                        onChange={() =>
                                            handleLockTimeChange(
                                                "18"
                                            )
                                        }
                                    />
                                    <label htmlFor="18" className="text-primary ml-2">18 Months Lock</label>
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type="radio"
                                        id="24"
                                        name="time"
                                        value="24"
                                        checked={
                                            selectedLockTime ===
                                            "24"
                                        }
                                        onChange={() =>
                                            handleLockTimeChange(
                                                "24"
                                            )
                                        }
                                    />
                                    <label htmlFor="24" className="text-primary ml-2">24 Months Lock</label>
                                </div>
                            </fieldset>
                        </div>
                    </>
                )
            }
            <div className="mt-4 justify-start place-items-center w-full">
                <p className="text-primary w-full">Value of Total Positions : xx$</p>
                <p className="text-primary w-full">Total Bonus Received : xx%</p>
            </div>
            <div className="mt-4 justify-center">
                <Button>Purchase</Button>
            </div>
        </div>
    )
}
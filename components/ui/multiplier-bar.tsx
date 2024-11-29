"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "./badge";

export const MultiplierBar = ({
  onChange,
}: {
  onChange?: (multiplier: number) => void;
}) => {
  const [multiplier, setMultiplier] = useState(1);
  const barRef = useRef<HTMLDivElement>(null);

  const multipliers = [1, 1.5, 2, 2.5, 3, 3.5, 4];
  const maxMultiplier = multipliers[multipliers.length - 1];

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const handleMouseMove = (e: MouseEvent) => {
      if (barRef.current) {
        const rect = barRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const newMultiplier = (x / rect.width) * (maxMultiplier - 1) + 1;
        const roundedMultiplier = Math.round(newMultiplier * 2) / 2;
        setMultiplier(Math.max(1, Math.min(roundedMultiplier, maxMultiplier)));
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    onChange?.(multiplier);
  }, [multiplier, onChange]);

  const percentage = ((multiplier - 1) / (maxMultiplier - 1)) * 100;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="font-semibold">Leverage Setup</span>
        <Badge variant="default" className="rounded-full px-6 shadow-lg">
          {multiplier}x
        </Badge>
      </div>
      <div className="w-full">
        <div
          ref={barRef}
          className="relative h-3 bg-primary rounded-full cursor-pointer mb-4"
          onMouseDown={handleMouseDown}
        >
          <div
            className="absolute top-0 left-0 h-full bg-accent rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
          <div
            className="absolute top-0 w-6 h-6 border-2 border-primary bg-accent rounded-full -translate-y-1/4"
            style={{ left: `calc(${percentage}% - 12px)` }}
          />
        </div>
        <div className="flex justify-between items-center px-2">
          {multipliers.map((mark) => (
            <span key={mark} className="text-xs text-primary font-semibold">
              {mark}x
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

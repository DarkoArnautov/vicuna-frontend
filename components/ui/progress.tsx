"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    percentageIndicator?: boolean;
  }
>(({ className, value, percentageIndicator = false, ...props }, ref) => (
  <div className="relative pt-5">
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-green-400 shadow-lg",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-green-400 transition-all shadow-lg"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
    {percentageIndicator && (
      <div className="absolute top-3 left-0 w-full flex justify-center">
        <span className="bg-green-400 shadow-lg text-black text-xs px-2 py-1 rounded-full">
          {Math.round(value || 0)}%
        </span>
      </div>
    )}
  </div>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

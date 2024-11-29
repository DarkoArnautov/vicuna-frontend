import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Question } from "../icons/question";

export const InfoTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Question className="w-3 h-3 rounded-full" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

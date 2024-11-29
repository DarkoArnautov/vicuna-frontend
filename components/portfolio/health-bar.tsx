import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Question } from "@/components/icons/question";
import { Badge } from "../ui/badge";

export const HealthBar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-1">
          Health Bar
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Question className="w-3 h-3 rounded-full" />
              </TooltipTrigger>
              <TooltipContent className="w-[250px] p-4">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center gap-4 justify-between">
                    <p className="flex-grow text-xs text-right text-foreground/70">
                      Red (90% and above):
                    </p>
                    <Badge className="bg-red-500 text-white w-12"></Badge>
                  </div>
                  <div className="flex items-center gap-4 justify-between">
                    <p className="flex-grow text-xs text-right text-foreground/70">
                      Orange (80% to 89.99%):
                    </p>
                    <Badge className="bg-orange-500 text-white w-12"></Badge>
                  </div>
                  <div className="flex items-center gap-4 justify-between">
                    <p className="flex-grow text-xs text-right text-foreground/70">
                      Yellow (60% to 79.99%):
                    </p>
                    <Badge className="bg-yellow-500 w-12"></Badge>
                  </div>
                  <div className="flex items-center gap-4 justify-between">
                    <p className="flex-grow text-xs text-right text-foreground/70">
                      Green (less than 59.99%):
                    </p>
                    <Badge className="bg-green-500 w-12"></Badge>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={50} percentageIndicator={true} />
      </CardContent>
    </Card>
  );
};

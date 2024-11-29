import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "@/lib/utils"; // Make sure to import cn

export const DoubleAvatar = ({
  firstSrc,
  secondSrc,
  firstAlt,
  secondAlt,
  size = "default", // Add a size prop with a default value
}: {
  firstSrc: string;
  secondSrc: string;
  firstAlt: string;
  secondAlt: string;
  size?: "small" | "default" | "large"; // Define possible size options
}) => {
  // Define size classes
  const sizeClasses = {
    small: "ml-2 mr-1 h-4 w-4 p-0.5 -right-2",
    default: "h-10 w-10",
    large: "h-12 w-12",
  };

  return (
    <div className="relative inline-flex">
      <Avatar
        className={cn("z-10 -right-5 bg-background p-1.5", sizeClasses[size])}
      >
        <AvatarImage src={firstSrc} alt={firstAlt} className="object-contain" />
        <AvatarFallback>{firstAlt?.charAt(0)}</AvatarFallback>
      </Avatar>
      <Avatar
        className={cn(
          "absolute -left-2 bg-background p-1.5",
          sizeClasses[size]
        )}
      >
        <AvatarImage
          src={secondSrc}
          alt={secondAlt}
          className="object-contain"
        />
        <AvatarFallback>{secondAlt?.charAt(0)}</AvatarFallback>
      </Avatar>
    </div>
  );
};

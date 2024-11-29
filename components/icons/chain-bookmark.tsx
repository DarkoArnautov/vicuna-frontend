import Image from "next/image";
import { Bookmark } from "./bookmark";

export const ChainBookmark = ({ src }: { src: string }) => {
  return (
    <div className="relative w-8 h-8 mt-0.5">
      <Bookmark className="w-full h-full text-card" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={src} alt="chain bookmark" width={16} height={16} />
      </div>
    </div>
  );
};

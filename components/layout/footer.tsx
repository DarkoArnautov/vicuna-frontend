import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row items-center h-fit z-50 justify-between shadow-inner gap-10 bg-background w-full py-12 px-10 relative">
        <div>
          <Link href="/" className="flex gap-[5px] items-center">
            <Image src="/logo.svg" alt="logo" width={78} height={78} />
            <div className="uppercase leading-[28px] sm:leading-[32px] lg:leading-[36px] text-primary">
              <p className="text-[32px] sm:text-[36px] lg:text-[40px] font-black">
                Vicuna
              </p>
              <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-extralight">
                Finance
              </p>
            </div>
          </Link>
          <p className="mt-4 font-extralight text-primary">(Work In Progress)</p>
        </div>
        {/* <Link href="/">
          <Image src="/logo.png" alt="Llama icon" width={300} height={300} />
        </Link> */}
        <div className="flex flex-row lg:flex-col items-start gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary text-xs md:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-row space-x-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar className="bg-primary flex items-center justify-center">
                <AvatarImage
                  src={link.imageSrc}
                  className="w-5 h-5 object-contain"
                />
                <AvatarFallback className="text-xs">
                  {link.imageSrc}
                </AvatarFallback>
              </Avatar>
            </Link>
          ))}
        </div>
      </div>
      <p className="text-xs text-center text-primary pb-2">
        Vicuna Finance, {new Date().getFullYear()}. All rights reserved
      </p>
    </footer>
  );
};

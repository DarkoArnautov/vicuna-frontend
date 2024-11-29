import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ScrollingPartners from "@/components/home/scrolling-partners";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="relative pt-4 w-full h-[600px]">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute top-28 right-20 bg-background/60 text-black px-12 py-6 rounded">
          Network TVL: $24,325,784.58
        </div>
      </div>
      <div className="flex flex-col mx-4 md:mx-10 py-16">
        <Card className="max-w-4xl py-10">
          <CardHeader className="py-10">
            <CardTitle className="text-lg font-semibold">
              Vicuna Finance offers:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <ul className="space-y-8 text-base">
                <li className="flex items-center gap-4">
                  <Image
                    src="/icons/llama.svg"
                    alt="Llama icon"
                    width={20}
                    height={20}
                  />
                  Yield farm while you sleep with Vicuna Finance's
                  high-performance, set-and-forget auto compounders
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src="/icons/llama.svg"
                    alt="Llama icon"
                    width={20}
                    height={20}
                  />
                  Amplify your rewards with leveraged yield farms and accelerate
                  asset growth-Stake $VIFI to earn fees + protocol revenue and
                  govern Vicuna Finance
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src="/icons/llama.svg"
                    alt="Llama icon"
                    width={20}
                    height={20}
                  />
                  Borrowing and lending off crypto assets at high APR
                </li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="w-full flex flex-col pb-16 space-y-12 items-center relative overflow-hidden">
        <h2 className="text-6xl text-primary">Partners</h2>
        <ScrollingPartners />
        {/* <div className="flex flex-col md:flex-row gap-24 items-start md:items-center">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src="/icons/layer-zero.png"
              alt="LayerZero icon"
              width={24}
              height={24}
            />
            <p className="text-xl text-black font-bold">LayerZero.</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Image
              src="/icons/debank.png"
              alt="Llama icon"
              width={32}
              height={32}
            />
            <p className="text-xl text-white">Debank</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Image
              src="/icons/dune.png"
              alt="Llama icon"
              width={32}
              height={32}
            />
            <p className="text-xl text-white">Dune</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Image
              src="/icons/uiux.png"
              alt="Llama icon"
              width={32}
              height={32}
            />
            <p className="text-xl text-black">Web3 UI/UX</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Image
              src="/icons/sonic-labs.svg"
              alt="Llama icon"
              width={120}
              height={32}
            />
            {/* <p className="text-xl text-black">Sonic Labs</p> 
          </div>
        </div> */}
      </div>
    </main>
  );
}

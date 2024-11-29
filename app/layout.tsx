import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/components/providers/web3-provider";
import { DisclaimerProvider } from "@/components/providers/disclaimer-provider"; 
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vicuna",
  description: "Vicuna Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col min-h-screen bg-background`}
      >
        <Web3Provider>
          <DisclaimerProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Toaster />
            <Footer />
          </DisclaimerProvider>
        </Web3Provider>
      </body>
    </html>
  );
}

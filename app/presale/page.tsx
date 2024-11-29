import { PresaleModal } from "@/components/presale/presale-modal";
import { SwitchChain } from "@/components/switch-chain";

export default function Page() {
    return (
        <div className="bg-card p-4 h-full rounded-lg mx-10 mx-auto my-[150px] flex flex-col gap-6 shadow-2xl w-full max-w-lg">
            <div className="flex flex-col justify-evenly gap-4">
                <h1 className="text-primary text-lg font-semibold text-[#f22321] text-center">Vicuna Finance Presale</h1>
                <div className="flex justify-end">
                    <SwitchChain />
                </div>
                <p className="text-primary text-base font-semibold text-left">Wallet Balance:   <span className="text-[#f22321]">xxxx USDC</span></p>

                <PresaleModal />
            </div>
        </div>
    );
}

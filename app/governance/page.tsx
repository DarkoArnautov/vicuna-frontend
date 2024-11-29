import { LPStaking } from "@/components/governance/lp-staking";
import { SingleStake } from "@/components/governance/single-stake";

export default function Page() {
  return (
    <div className="bg-card p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-6 shadow-2xl">
      <div className="flex flex-col lg:flex-row justify-evenly gap-4">
        <LPStaking />
        <SingleStake />
      </div>
    </div>
  );
}

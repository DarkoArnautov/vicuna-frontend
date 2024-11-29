import { SearchFilter } from "@/components/search-filter";
import { VaultTable } from "@/components/vaults/vault-table";

export default function Page() {
  return (
    <div className=" p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <SearchFilter route="vaults" />
        <div className="flex items-center space-x-4">
          <p className="text-primary">
            Network TVL:
            <span className="font-semibold"> $24,325,784.58</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card p-4 rounded-lg shadow-xl">
        <VaultTable />
      </div>
    </div>
  );
}

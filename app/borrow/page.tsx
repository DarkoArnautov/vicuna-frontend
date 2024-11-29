import { SearchFilter } from "@/components/search-filter";
import { BorrowTable } from "@/components/borrow/borrow-table";

export default function Page() {
  return (
    <div className=" p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <SearchFilter route="borrow" />
      </div>
      <div className="flex flex-col gap-4 bg-card p-4 rounded-lg shadow-xl">
        <BorrowTable />
      </div>
    </div>
  );
}

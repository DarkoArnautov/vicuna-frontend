export type BorrowData = { 
  asset: {
    name: string;
    symbol: string;
    imageSrc: string;
  };
  totalSupplied: {
    amount: number;
    value: number;
  };
  supplyAPY: number;
  totalBorrowed: {
    amount: number;
    value: number;
  };
  borrowAPY: number;
  collateralFactor: number;
};

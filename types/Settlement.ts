import Region from "./Region";

interface Settlement {
  region: Region | null;
  updateRegion: (region: Region | null) => void;
  settlementCount: number | null;
  updateSettlementCount: (count: number) => void;
}

export default Settlement;

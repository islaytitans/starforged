import Region from "./Region";

interface Sector {
  region: Region | null;
  updateRegion: (region: Region | null) => void;
  settlementCount: number | null;
  updateSettlementCount: (count: number) => void;
}

export default Sector;

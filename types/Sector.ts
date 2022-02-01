import Region from "./Region";
import Settlement from "./Settlement";

interface Sector {
  region: Region | null;
  updateRegion: (region: Region | null) => void;
  settlementCount: number | null;
  updateSettlementCount: (count: number) => void;
  settlements: Array<Settlement> | null;
  updateSettlement: (settlement: Settlement) => void;
}

export default Sector;

import { createContext } from "react";
import Region from "../types/Region";
import Sector from "../types/Sector";
import Settlement from "../types/Settlement";

export const defaultSectorState = {
  region: null,
  updateRegion: (region: Region | null) => console.log(region),
  settlementCount: null,
  updateSettlementCount: (count: number) => console.log(count),
  settlements: null,
  updateSettlement: (settlement: Settlement) => console.log(settlement),
};

export const SectorContext = createContext<Sector>(defaultSectorState);

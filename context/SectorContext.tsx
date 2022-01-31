import { createContext } from "react";
import Region from "../types/Region";
import Settlement from "../types/Settlement";

export const defaultSectorState = {
  region: null,
  updateRegion: (region: Region | null) => console.log(region),
  settlementCount: null,
  updateSettlementCount: (count: number) => console.log(count),
};

export const SectorContext = createContext<Settlement>(defaultSectorState);

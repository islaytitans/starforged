import { createContext } from "react";
import Region from "../types/Region";
import Sector from "../types/Sector";

export const defaultSectorState = {
  region: null,
  updateRegion: (region: Region | null) => console.log(region),
  settlementCount: null,
  updateSettlementCount: (count: number) => console.log(count),
};

export const SectorContext = createContext<Sector>(defaultSectorState);

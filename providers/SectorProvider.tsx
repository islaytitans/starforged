import { FC, useState } from "react";
import { SectorContext, defaultSectorState } from "../context/SectorContext";
import Region from "../types/Region";

const SectorProvider: FC = ({ children }) => {
  const [region, setRegion] = useState<Region | null>(defaultSectorState.region);
  const [settlementCount, setSettlementCount] = useState<number | null>(
    defaultSectorState.settlementCount
  );

  const updateRegion = (region: Region | null) => {
    setRegion(region);
    if (settlementCount === null && region !== null) {
      setSettlementCount(region.suggestedSettlementCount);
    }
  };

  const updateSettlementCount = (count: number) => {
    setSettlementCount(count);
  };

  return (
    <SectorContext.Provider
      value={{
        region: region,
        updateRegion: updateRegion,
        settlementCount: settlementCount,
        updateSettlementCount: updateSettlementCount,
      }}>
      {children}
    </SectorContext.Provider>
  );
};

export default SectorProvider;

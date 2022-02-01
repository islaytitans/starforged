import { FC, useState } from "react";
import { SectorContext, defaultSectorState } from "../context/SectorContext";
import Region from "../types/Region";
import Settlement from "../types/Settlement";

const SectorProvider: FC = ({ children }) => {
  const [region, setRegion] = useState<Region | null>(defaultSectorState.region);
  const [settlementCount, setSettlementCount] = useState<number | null>(
    defaultSectorState.settlementCount
  );
  const [settlementCountChanged, setSettlementCountChanged] = useState<boolean>(false);
  const [settlements, setSettlements] = useState<Array<Settlement> | null>(
    defaultSectorState.settlements
  );

  const updateRegion = (region: Region | null) => {
    setRegion(region);
    if (region !== null && !settlementCountChanged) {
      setSettlementCount(region.suggestedSettlementCount);
    }
  };

  const updateSettlementCount = (count: number) => {
    setSettlementCount(count);
    setSettlementCountChanged(true);
    setSettlements(new Array(count));
  };

  const updateSettlement = (settlement: Settlement) => {
    if (settlements === null) {
      setSettlements([settlement]);
    } else {
      deleteSettlement(settlement.id);
      setSettlements([...settlements, settlement]);
    }
  };

  const deleteSettlement = (settlementId: number) => {
    if (settlements === null) {
      return;
    }

    const filteredSettlements = settlements.filter((s) => s.id !== settlementId);
    setSettlements(filteredSettlements);
  };

  return (
    <SectorContext.Provider
      value={{
        region: region,
        updateRegion: updateRegion,
        settlementCount: settlementCount,
        updateSettlementCount: updateSettlementCount,
        settlements: settlements,
        updateSettlement: updateSettlement,
      }}>
      {children}
    </SectorContext.Provider>
  );
};

export default SectorProvider;

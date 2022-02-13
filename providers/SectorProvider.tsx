import { Guid } from "guid-typescript";
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
      updateSettlementCount(region.suggestedSettlementCount, true);
    }
  };

  const updateSettlementCount = (count: number, autoChange?: boolean) => {
    setSettlementCount(count);
    if (!autoChange) {
      setSettlementCountChanged(true);
    }
    if (count > 0) {
      if (!settlements || settlements.length < count) {
        let settle = settlements ?? new Array<Settlement>();
        while (settle.length < count) {
          settle.push({ id: Guid.create() });
        }
        setSettlements(settle);
      } else if (settlements.length > count) {
        let settle = settlements;
        while (settle.length > count) {
          settle.pop();
        }
        setSettlements(settle);
      }
    } else {
      setSettlements(null);
    }
  };

  const updateSettlement = (settlement: Settlement) => {
    if (settlements === null) {
      setSettlements([settlement]);
    } else {
      deleteSettlement(settlement.id);
      setSettlements([...settlements, settlement]);
    }
  };

  const deleteSettlement = (settlementId: Guid) => {
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

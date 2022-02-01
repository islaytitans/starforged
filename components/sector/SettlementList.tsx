import { useContext } from "react";
import { SectorContext } from "../../context/SectorContext";
import Settlement from "../../types/Settlement";
import SettlementItem from "./SettlementItem";

const SettlementList = () => {
  const Sector = useContext(SectorContext);

  return (
    <>
      {Sector.settlementCount && (
        <section className="flex flex-col justify-center">
          <label className="bg-gray-200 p-4">Settlements</label>
          <div className="w-full rounded-lg bg-white shadow-xl">
            <ul className="p-4">
              {Sector.settlements?.map((settlement: Settlement) => (
                <SettlementItem key={settlement.id} settlement={settlement} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default SettlementList;

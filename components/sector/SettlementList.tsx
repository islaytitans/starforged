import { useContext } from "react";
import { SectorContext } from "../../context/SectorContext";
import Settlement from "../../types/Settlement";
import SettlementItem from "./SettlementItem";

const SettlementList = () => {
  const Sector = useContext(SectorContext);

  return (
    <>
      {Sector.settlementCount && (
        <section>
          <div className="flex justify-center">
            <div className="w-1/2 rounded-lg bg-white shadow-xl">
              <ul className="p-4">
                {Sector.settlements?.map((settlement: Settlement) => (
                  <SettlementItem key={settlement.id} settlement={settlement} />
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SettlementList;

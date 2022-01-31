import { ChangeEvent, useContext, useState } from "react";
import { SectorContext } from "../../context/SectorContext";

const SettlementCount = () => {
  const Settlement = useContext(SectorContext);

  const setCount = (e: ChangeEvent<HTMLInputElement>) => {
    const count: number = +e.target.value;
    Settlement.updateSettlementCount(count);
  };

  return (
    <>
      {Settlement.settlementCount && (
        <section>
          <div className="flex justify-center">
            <div className="w-1/2 rounded-lg bg-white shadow-xl">
              <input
                type="number"
                title="settlementCount"
                className="p-4"
                value={Settlement.settlementCount ?? 0}
                onChange={setCount}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SettlementCount;

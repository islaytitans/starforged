import { ChangeEvent, useContext, useState } from "react";
import { SectorContext } from "../../context/SectorContext";

const SettlementCount = () => {
  const Sector = useContext(SectorContext);

  const setCount = (e: ChangeEvent<HTMLInputElement>) => {
    const count: number = +e.target.value;
    Sector.updateSettlementCount(count);
  };

  return (
    <>
      {Sector.settlementCount && (
        <section className="flex justify-center">
          <label className="w-1/2 bg-gray-200 p-4">Number of settlements</label>
          <div className="w-1/2 rounded-lg bg-white shadow-xl">
            <input
              type="number"
              title="settlementCount"
              className="w-full p-4"
              value={Sector.settlementCount}
              onChange={setCount}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default SettlementCount;

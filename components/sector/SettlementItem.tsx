import { ChangeEvent, useContext } from "react";
import { SectorContext } from "../../context/SectorContext";
import Settlement from "../../types/Settlement";

const SettlementItem = ({ settlement, index }: { settlement: Settlement; index: number }) => {
  const Sector = useContext(SectorContext);

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    const count: number = +e.target.value;
    Sector.updateSettlementCount(count);
  };

  return (
    <li>
      <h3>Settlement {index + 1}</h3>
      <form className="w-full justify-center" onSubmit={onSubmit}>
        <label htmlFor="name" className="w-1/2 bg-gray-200 p-4">
          Name
        </label>
        <input
          type="text"
          title="name"
          className="w-1/2 rounded-lg bg-white p-4 shadow-xl"
          value={settlement.name}></input>
        <button type="submit" className="w-full">
          Submit
        </button>
      </form>
    </li>
  );
};

export default SettlementItem;

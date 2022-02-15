import { ChangeEvent, useContext } from "react";
import { SectorContext } from "../../context/SectorContext";
import Authority from "../../enums/Authority";
import Population from "../../enums/Population";
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
      <form className="grid w-full grid-cols-2 justify-center" onSubmit={onSubmit}>
        <label htmlFor="name" className="bg-gray-200 p-4">
          Name
        </label>
        <input
          type="text"
          title="name"
          className="rounded-lg bg-white p-4 shadow-xl"
          value={settlement.name}></input>
        <label htmlFor="location" className="bg-gray-200 p-4">
          Location
        </label>
        <input
          type="text"
          title="location"
          className="rounded-lg bg-white p-4 shadow-xl"
          value={settlement.location}></input>
        <label htmlFor="population" className="bg-gray-200 p-4">
          Population
        </label>
        <select name="population" id="population">
          {Object.keys(Population).map((key) => (
            <option key={key}>{Population[key]}</option>
          ))}
        </select>
        <label htmlFor="authority" className="bg-gray-200 p-4">
          Authority
        </label>
        <select name="authority" id="authority">
          {Object.keys(Authority).map((key) => (
            <option key={key}>{Authority[key]}</option>
          ))}
        </select>
        <label htmlFor="projects" className="bg-gray-200 p-4">
          Projects
        </label>
        <input
          type="text"
          title="projects"
          className="rounded-lg bg-white p-4 shadow-xl"
          value={settlement.location}></input>
        <button type="submit" className="col-span-2">
          Submit
        </button>
      </form>
    </li>
  );
};

export default SettlementItem;

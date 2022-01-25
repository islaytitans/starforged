import { ChangeEvent, useState } from "react";

const SettlementCount = () => {
  const [settlementCount, setSettlementCount] = useState(3);

  const setCount = (e: ChangeEvent<HTMLInputElement>) => {
    const count: number = +e.target.value;
    setSettlementCount(count);
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="w-1/2 rounded-lg bg-white shadow-xl">
          <input
            type="number"
            title="settlementCount"
            className="p-4"
            value={settlementCount}
            onChange={setCount}
          />
        </div>
      </div>
    </section>
  );
};

export default SettlementCount;

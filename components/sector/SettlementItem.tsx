import { useContext } from "react";
import { SectorContext } from "../../context/SectorContext";
import Settlement from "../../types/Settlement";

const SettlementItem = ({ settlement }: { settlement: Settlement }) => {
  const Sector = useContext(SectorContext);

  return (
    <li>
      <p>{settlement.id}</p>
    </li>
  );
};

export default SettlementItem;

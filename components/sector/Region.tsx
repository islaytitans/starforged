import { useContext, useState } from "react";
import { MouseEvent } from "react";
import { SectorContext } from "../../context/SectorContext";
import Region from "../../types/Region";

const Region = () => {
  const Sector = useContext(SectorContext);

  const regions: Array<Region> = [
    {
      id: 1,
      name: "Terminus",
      description:
        "Settlements are relatively common here, and spaceborne routes between communities are usually well-charted. If you want to focus on interacting with other people and communities, start here",
      suggestedSettlementCount: 4,
    },
    {
      id: 2,
      name: "Outlands",
      description:
        "This region represents an area of recent expansion. Settlements here are scattered, and navigational paths are often uncharted and perilous. If you envision yourself as a spacer on a wild frontier, start here.",
      suggestedSettlementCount: 3,
    },
    {
      id: 3,
      name: "Expanse",
      description:
        "Only a few bold pioneers have delved these far-flung reaches. If you're ready to face the dangers of lonely exploration within uncharted space, start here.",
      suggestedSettlementCount: 2,
    },
    {
      id: 4,
      name: "Void",
      description:
        "In the reaches beyond the Forge, isolated stars are separated by vast gulfs of nothing. Travel and settlement here is impractical if not impossible. Don't start your campaign here.",
      suggestedSettlementCount: 0,
    },
  ];

  const chooseRegion = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const regionId = Number(e.currentTarget.dataset.id);

    const chosenRegion = regions.find((r) => r.id === regionId);
    if (chosenRegion !== undefined) {
      Sector.updateRegion(chosenRegion);
    }
  };

  const clearRegion = (e: MouseEvent<HTMLButtonElement>) => {
    Sector.updateRegion(null);
  };

  return (
    <section className="flex justify-center">
      <div className="w-full rounded-lg bg-white shadow-xl">
        {!Sector.region && (
          <ul id="region" className="divide-y divide-gray-300">
            <li className="bg-gray-200 p-4" data-id="-1">
              Choose your starting region
            </li>
            {regions.map((region: Region) => (
              <li
                className="cursor-pointer p-4 hover:bg-gray-50"
                key={region.id}
                data-id={region.id}
                onClick={chooseRegion}>
                {region.name}
                <p className="pt-0.5 text-xs">{region.description}</p>
              </li>
            ))}
          </ul>
        )}
        {Sector.region && (
          <button className="w-full p-4 hover:bg-gray-50" onClick={clearRegion}>
            {Sector.region?.name}
          </button>
        )}
      </div>
    </section>
  );
};

export default Region;

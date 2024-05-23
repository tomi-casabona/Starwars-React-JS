import { PilotsCard } from "./PilotsCard";

export const ListPilots = ({ pilots }) => {
  if (!pilots) return;

  if (pilots)
    return (
      <div className="grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid gap-10 p-3 overflow-visible w-full sm:w-4/5 mx-auto flex-1 justify-center">
        {pilots.map((item) => (
          <PilotsCard key={item} pilotItemURL={item} />
        ))}
      </div>
    );
};

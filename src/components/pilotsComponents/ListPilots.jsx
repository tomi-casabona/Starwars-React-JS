import { PilotsCard } from "./PilotsCard";

export const ListPilots = ({ pilots }) => {
  if (!pilots) return;

  if (pilots)
    return (
      <div>
        {pilots.map((item) => (
          <PilotsCard key={item} pilotItemURL={item} />
        ))}
      </div>
    );
};

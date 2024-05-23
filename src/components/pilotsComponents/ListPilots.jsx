import { PilotsCard } from "./PilotsCard";
export const ListPilots = ({ pilots }) => {
  
  return pilots.map((pilot) => <PilotsCard key={pilot} pilot={pilot} />);
};

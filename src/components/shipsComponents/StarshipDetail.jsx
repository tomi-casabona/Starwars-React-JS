import { useLocation } from "react-router-dom";

export const StarShipDetail = () => {
  const location = useLocation();
  const { starship } = location.state;

  return (
    <div className="bg-black h-screen flex text-white">
      <ul className="text-xl p-4 ">
        <li>Name: {starship.name}</li>
        <li>Model: {starship.model}</li>
        <li>Credit cost: ${starship.cost_in_credits}</li>
        <li>Manufacturer: {starship.manufacturer}</li>
        <li>URL: {starship.url}</li>
      </ul>
    </div>
  );
};

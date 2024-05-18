import { useLocation } from "react-router-dom";
import { getIdFromURL } from "../../helpers/getIdFromURL";

export const StarShipDetail = () => {
  const location = useLocation();
  const { starship } = location.state || {};
  const id = getIdFromURL(starship.url);
  const starshipURL = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <div
      style={{ backgroundImage: `url(${starshipURL})` }}
      className="bg-black bg-no-repeat bg-center h-screen flex text-white"
    >
      <ul className="text-xl p-4 ">
        <li>Name: {starship.name ? starship.name : "Name is not found"}</li>
        <li>Model: {starship.model}</li>
        <li>Credit cost: ${starship.cost_in_credits}</li>
        <li>Manufacturer: {starship.manufacturer}</li>
        <li>URL: {starship.url}</li>
      </ul>
    </div>
  );
};

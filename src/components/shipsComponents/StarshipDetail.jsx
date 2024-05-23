import { useLocation } from "react-router-dom";
import { getIdFromURL } from "../../helpers/getIdFromURL";
import { ListPilots } from "../pilotsComponents/ListPilots";

export const StarShipDetail = () => {
  const location = useLocation();
  const { starship } = location.state || {};
  const id = getIdFromURL(starship.url);
  const starshipURL = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src =
      "https://i0.wp.com/teamsbackground.net/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg?w=1920&ssl=1";
  };

  return (
    <div>
    <div className="bg-detail bg-cover bg-center bg-no-repeat w-full flex-1">
      <div className="w-11/12 mx-auto">
        <h2 className="my-10 font-orbitron p-3 uppercase border-t border-b border-gray-500 text-white text-2xl">
          StarShip
        </h2>
        <div className="border border-gray-500 w-full mx-auto my-10 rounded-2xl overflow-hidden flex flex-col lg:flex-row justify-center min-h-80">
          <div className="w-full lg:w-1/3 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={starshipURL}
              onError={handleImageError}
            />
          </div>
          <div className="w-full lg:w-2/3 bg-zinc-950 bg-opacity-50 lg:border-s-4 border-s-red-400 p-4 font-orbitron">
            <h3 className="text-2xl text-white font-bold uppercase my-3">
              {starship.name ? starship.name : "Name is not found"}
            </h3>
            <ul className="text-xl my-5">
              <li className="p-3">
                Model:{" "}
                <span className="text-white uppercase">{starship.model}</span>
              </li>
              <li className="p-3">
                Credit cost:{" "}
                <span className="text-white uppercase">
                  ${starship.cost_in_credits}
                </span>
              </li>
              <li className="p-3">
                Manufacturer:{" "}
                <span className="text-white uppercase">
                  {starship.manufacturer}
                </span>
              </li>
              <li className="p-3">
                URL:{" "}
                <span className="text-white uppercase">{starship.url}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      {/* mapear pilots */}
      <div className="w-11/12 mx-auto">
        <h2 className="my-10 font-orbitron p-3 uppercase border-t border-b border-gray-500 text-white text-2xl">
          Pilots
        </h2>
        <ListPilots pilots={starship.pilots} />
      </div>
      </div>
  );
};

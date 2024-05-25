import { useLocation } from "react-router-dom";
import { getIdFromURL } from "../../helpers/getIdFromURL";
import { handleImageError } from "../../utils/handleImageError";
import { Pilots } from "../pilotsComponents/Pilots";
import { Films } from "../filmsComponents/Films";

export const StarShipDetail = () => {
  const location = useLocation();
  const { starship } = location.state || {};
  const id = getIdFromURL(starship.url);
  const starshipURL = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <div>
      <div className="bg-detail bg-cover bg-center bg-no-repeat w-full flex-1">
        <div className="w-11/12 mx-auto">
          <h2 className="my-10 font-orbitron p-3 uppercase border-t-4 border-b-4 border-gray-500 text-white text-2xl">
            StarShip
          </h2>
          <div className="border border-gray-500 w-full mx-auto my-10 rounded-2xl overflow-hidden flex flex-col lg:flex-row justify-center min-h-80 text-gray-500">
            <div className="w-full lg:w-1/3 overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={starshipURL}
                onError={handleImageError}
              />
            </div>
            <div className="w-full lg:w-2/3 bg-zinc-950 bg-opacity-50 lg:border-s-4 border-s-red-400 p-4 font-orbitron">
              <h3 className="text-2xl  text-gray-200 font-bold uppercase my-3">
                {starship.name ? starship.name : "Name is not found"}
              </h3>
              <ul className="text-xl my-5">
                <li className="p-3">
                  Model:{" "}
                  <span className=" text-gray-400 uppercase">{starship.model}</span>
                </li>
                <li className="p-3">
                  Credit cost:{" "}
                  <span className=" text-gray-400 uppercase">
                    ${starship.cost_in_credits}
                  </span>
                </li>
                <li className="p-3">
                  Manufacturer:{" "}
                  <span className="text-gray-400  uppercase">
                    {starship.manufacturer
                      ? starship.manufacturer
                      : "Unknow manofacturer"}
                  </span>
                </li>
                <li className="p-3">
                  Passengers:{" "}
                  <span className="text-gray-400  uppercase">
                    {starship.passengers}
                  </span>
                </li>
                {starship.max_atmosphering_speed && (
                  <li className="p-3">
                    Atmosphering Speed:{" "}
                    <span className="text-gray-400  uppercase">
                      {starship.max_atmosphering_speed}
                    </span>
                  </li>
                )}
                {starship.hyperdrive_rating && (
                  <li className="p-3">
                    Hyperdrive rating:{" "}
                    <span className="text-gray-400  uppercase">
                      {starship.hyperdrive_rating}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {starship.pilots.length > 0 && <Pilots starship={starship} />}
      <Films starship={starship} />
    </div>
  );
};

import { useLocation } from "react-router-dom";
import { handleImageError } from "../../helpers/handleImageError";
import { getPilotIdFromURL } from "../../helpers/pilotHelpers/getPilotIdFromURL";
import { fetchPilotInfo } from "../../helpers/pilotHelpers/fetchPilotInfo";
export const PilotDetail = () => {
  const location = useLocation();
  const { pilot } = location.state || {}; // Recupera el estado del piloto
  const id = getPilotIdFromURL(pilot.url);
  const pilotImageURL = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  const specie = pilot.specie ? fetchPilotInfo(pilot.specie) : "";

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
                src={pilotImageURL}
                onError={handleImageError}
              />
            </div>
            <div className="w-full lg:w-2/3 bg-zinc-950 bg-opacity-50 lg:border-s-4 border-s-red-400 p-4 font-orbitron">
              <h3 className="text-2xl  text-gray-200 font-bold uppercase my-3">
                {pilot.name ? pilot.name : "Name is not found"}
              </h3>
              <ul className="text-xl my-5">
                <li className="p-3">
                  Height:{" "}
                  <span className=" text-gray-400 uppercase">
                    {pilot.height}
                  </span>
                </li>
                <li className="p-3">
                  Mass:{" "}
                  <span className=" text-gray-400 uppercase">
                    {pilot.mass}kg
                  </span>
                </li>
                <li className="p-3">
                  Gender:{" "}
                  <span className="text-gray-400  uppercase">
                    {pilot.gender}
                  </span>
                </li>
                {specie && (
                  <li className="p-3">
                    Species:
                    <span className="text-gray-400  uppercase">{specie} </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

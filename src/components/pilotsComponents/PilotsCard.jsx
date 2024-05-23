import { getIdFromURL } from "../../helpers/getIdFromURL";

export const PilotsCard = ({ pilotURL }) => {
  const pilot = fetchPilotInfo(pilotURL); //todo
  const id = getIdFromURL(pilot.url); // TODO
  const pilotImageURL = `https://starwars-visualguide.com/#/characters/${id}`;

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src =
      "https://i0.wp.com/teamsbackground.net/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg?w=1920&ssl=1";
  };

  return (
    <div className="w-full h-auto mx-auto my-3 rounded-xl bg-zinc-950 cursor-pointer hover:bg-zinc-900 duration-500 hover:scale-105">
      <div className="rounded-lg overflow-hidden">
        <div className="h-60 w-full">
          <img
            className="w-full h-full object-cover object-center"
            src={pilotImageURL}
            onError={handleImageError}
          />
        </div>
        <div className="px-4 font-orbitron font-bold text-xl text-zinc-50 mt-5">
          {pilot.name}
        </div>
        <div className="px-4 font-normal text-lg text-zinc-600 mb-5">
          height: {pilot.height}
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { getPilotIdFromURL } from "../../helpers/getPilotIdFromURL";
import { fetchPilot } from "../../redux/slices/pilotsSlice";
import { useDispatch } from "react-redux";

export const PilotsCard = ({ pilotItemURL }) => {
  const [pilot, setPilot] = useState(null);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPilotData = async () => {
      try {
        const data = await dispatch(fetchPilot(pilotItemURL));
        if (!data.payload) {
          throw new Error("Network response was not ok");
        }
        setPilot(data.payload);
      } catch (error) {
        setError(error);
      }
    };

    fetchPilotData();
  }, [pilotItemURL]);

  if (error) {
    return (
      <div>
        <p>May the force be with you - Error fetching pilot data.</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!pilot) {
    return <div>Loading...</div>;
  }

  const id = getPilotIdFromURL(pilot.url);
  const pilotImageURL = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src =
      "https://i0.wp.com/teamsbackground.net/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg?w=1920&ssl=1";
  };

  return (
    <div className="w-full h-auto mx-auto my-3 rounded-xl bg-zinc-950 cursor-pointer hover:bg-zinc-900 duration-500 hover:scale-105">
      <div className="rounded-lg overflow-hidden">
        <div className="h-full w-auto">
          <img
            className="w-full h-full object-cover object-center"
            src={pilotImageURL}
            onError={handleImageError}
            alt={pilot.name}
          />
        </div>
        <div className="px-4 font-orbitron font-bold text-lg pt-4 text-zinc-600 mb-5 border-t-4 border-red-400 ">
          {pilot.name.toUpperCase()}
        </div>
        <div className="px-4 font-orbitron text-sm text-zinc-600 mb-5">
          Height: {pilot.height} cm.
        </div>
      </div>
    </div>
  );
};

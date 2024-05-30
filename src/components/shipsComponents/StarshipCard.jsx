import { useNavigate } from "react-router-dom";
import { getIdFromURL } from "../../helpers/shipHelpers/getIdFromURL";
import { handleImageError } from "../../helpers/handleImageError";

export const StarshipCard = ({ starship }) => {
  const navigate = useNavigate();
  const id = getIdFromURL(starship.url);
  const starshipURL = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <div
      className="w-full h-auto mx-auto my-3 rounded-xl bg-zinc-950 cursor-pointer hover:bg-zinc-900 duration-500 hover:scale-105"
      onClick={() => navigate("/starshipDetail", { state: { starship } })}
    >
      <div className="rounded-lg overflow-hidden">
        <div className="h-60 w-full">
          <img
            className="w-full h-full object-cover object-center"
            src={starshipURL}
            onError={handleImageError}
          />
        </div>
        <div className="px-4 font-orbitron font-bold text-xl text-zinc-50 mt-5">
          {starship.name}
        </div>
        <div className="px-4 font-normal text-lg text-zinc-600 mb-5">
          {starship.model}
        </div>
      </div>
    </div>
  );
};

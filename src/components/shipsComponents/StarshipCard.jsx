import { useNavigate } from "react-router-dom";

export const StarshipCard = ({ starship }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-1/2 mx-auto my-3 p-4 rounded-md bg-zinc-950 cursor-pointer hover:bg-zinc-900 duration-500"
      onClick={() => navigate("/starshipDetail", { state: { starship } })}
    >
      <div className="font-orbitron font-bold text-xl text-white">{starship.name}</div>
      <div className="font-normal text-lg">{starship.model}</div>
    </div>
  );
};

import { useNavigate } from "react-router-dom";

export const StarshipCard = ({ starship }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col m-4 p-4 border-sky-200 rounded-lg bg-black text-white"
      onClick={() => navigate("/starshipDetail", { state: { starship } })}
    >
      <div className="font-bold text-xl">{starship.name}</div>
      <div className="font-normal text-lg">{starship.model}</div>
    </div>
  );
};

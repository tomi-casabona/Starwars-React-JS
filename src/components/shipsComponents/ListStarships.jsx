import { StarshipCard } from "./StarshipCard";

export const ListStarships = ({ starship }) => {
  // url is used like ID in key parameter
  return (
    <div className="bg-slate-900 pt-2">
        <StarshipCard starship={starship} />
    </div>
  );
};

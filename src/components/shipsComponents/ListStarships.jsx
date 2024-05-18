import { StarshipCard } from "./StarshipCard";

export const ListStarships = ({ starships }) => {
  // url is used like ID in key parameter
  return (
    <div className="bg-slate-900 pt-2">
      {starships.map((starship) => (
        <StarshipCard key={starship.url} starship={starship} />
      ))}
    </div>
  );
};

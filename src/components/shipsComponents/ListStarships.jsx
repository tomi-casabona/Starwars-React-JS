import { StarshipCard } from "./StarshipCard";

export const ListStarships = ({ starship }) => {
  // url is used like ID in key parameter
  return (
    <StarshipCard starship={starship} />
  );
};

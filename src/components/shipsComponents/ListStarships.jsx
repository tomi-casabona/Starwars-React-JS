import { StarshipCard } from './StarshipCard';

export const ListStarships = ({ starshipsObject }) => {
  return starshipsObject.results.map((starship) => (
    <StarshipCard key={starship.url} starship={starship} />
  ));
};

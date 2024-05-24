import { StarshipCard } from './StarshipCard';
import { useSelector } from 'react-redux';

export const ListStarships = () => {
  const { data, status, error } = useSelector((state) => state.starshipData)

  return data.results.map((starship, index) => (
    <StarshipCard key={index} starship={starship} />
  ));
};

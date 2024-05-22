import { fetchStarships } from '../../helpers/fetchStarships';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StarshipCard } from '../shipsComponents/StarshipCard';

export const LoggedIn = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/starships/?page=1');
  const [starshipsObject, setStarshipsObject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStarships = async () => {
      try {
        const starshipsData = await fetchStarships(url);
        if (starshipsObject) {
          const starshipsAux = {
            ...starshipsData,
            results: [...starshipsObject.results, ...starshipsData.results],
          };
          setStarshipsObject(starshipsAux);
        } else {
          setStarshipsObject(starshipsData);
        }
      } catch (error) {
        setError(error);
      }
    };

    getStarships();
  }, [url]);

  const viewMore = () => {
    console.log('loaded more');
    if (starshipsObject.next) {
      setError(null);
      setUrl(starshipsObject.next);
    }
  };

  return (
    <div className='bg-login w-full flex-1'>
      {starshipsObject && (
        <InfiniteScroll
          dataLength={starshipsObject.results.length}
          next={viewMore}
          hasMore={starshipsObject.next}
          loader={<div className='text-center text-2xl my-6'>Loading...</div>}
        >
          {starshipsObject.results.map((starship) => <StarshipCard key={starship.url} starship={starship} />)}
        </InfiniteScroll>
      )}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

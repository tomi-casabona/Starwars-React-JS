import { getAuth, signOut } from 'firebase/auth';
import { appFirebase } from '../../credenciales';
import { ListStarships } from '../shipsComponents/ListStarships';
import { fetchStarships } from '../../helpers/fetchStarships';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export const LoggedIn = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/starships/?page=1');
  const [starshipsObject, setStarshipsObject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth(appFirebase);

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
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getStarships();
  }, [url]);

  const viewMore = () => {
    console.log('loaded more');
    if (starshipsObject.next) {
      setLoading(true);
      setError(null);
      setUrl(starshipsObject.next);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
    // TODO : cambiar el estado a deslogueado
  };

  return (
    <>
      {starshipsObject && (
        <InfiniteScroll
          dataLength={starshipsObject.results.length}
          next={viewMore}
          hasMore={starshipsObject.next}
          loader={<div>Loading...</div>}
        >
          {starshipsObject.results.map((starship) => <ListStarships key={starship.url} starship={starship} />)}
        </InfiniteScroll>
      )}

      {error && <div>Error: {error.message}</div>}

      <div className="flex flex-col w-auto items-center gap-4">
        <button className="btn btn-secondary" onClick={handleSignOut}>
          sign Out
        </button>
      </div>
    </>
  );
};

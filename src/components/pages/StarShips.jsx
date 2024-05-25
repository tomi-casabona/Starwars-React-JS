import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ListStarships } from '../shipsComponents/ListStarships';
import { fetchStarshipData } from '../../redux/slices/starshipDataSlice';

export const StarShips = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/starships/?page=1');
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.starshipData)

  useEffect(() => {
    dispatch(fetchStarshipData(url));
  }, [url]);

  const viewMore = () => {
    if (data.next) {
      setUrl(data.next);
    }
  };

  if (status === 'failed') {
    return <div className='text-center text-2xl my-6'>Error: {error}</div>
  }

  return (
    <>
      <div className="w-full sm:w-1/2 mx-auto flex-1">
        {data && (
          <InfiniteScroll
            dataLength={data.results.length}
            next={viewMore}
            hasMore={data.next}
            loader={<div className="text-center text-2xl my-6">Loading...</div>}
            className="grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid gap-2 p-3 overflow-visible"
          >
            <ListStarships />
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

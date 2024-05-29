import { useEffect, useState } from "react";
import { getFilmIdFromURL } from "../../helpers/getFilmIdFromURL";
import { useDispatch } from "react-redux";
import { fetchFilm } from "../../redux/slices/filmsSlice";
//import { fetchFilmInfo } from "../../helpers/fetchFilmInfo";

export const FilmCard = ({ filmItemURL }) => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const data = await dispatch(fetchFilm(filmItemURL));
        if (!data.payload) {
          throw new Error("Network response was not ok");
        }
        setFilm(data.payload);
      } catch (error) {
        setError(error);
      }
    };

    fetchFilmData();
  }, [filmItemURL]);

  if (error) {
    return <li>May the force be with you - Error fetching Film data.</li>;
  }

  if (!film) {
    return <li>Loading...</li>;
  }

  const id = getFilmIdFromURL(film.url);
  const filmImageURL = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src =
      "https://i0.wp.com/teamsbackground.net/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg?w=1920&ssl=1";
  };

  return (
    <>
      <li className="w-full h-auto mx-auto my-3 rounded-xl bg-zinc-950 cursor-pointer hover:bg-zinc-900 duration-500 hover:scale-105">
        <div className="rounded-lg overflow-hidden">
          <div className="h-full w-auto">
            <img
              className="w-full h-full object-cover object-center"
              src={filmImageURL}
              onError={handleImageError}
              alt={film.name}
            />
          </div>
          <div className="px-4 font-orbitron font-bold text-lg pt-4 text-zinc-400 mb-5 border-t-4 border-red-400 ">
            {film.title.toUpperCase()}
          </div>
          <div className="px-4 font-orbitron text-sm text-zinc-600 mb-5">
            Episode {film.episode_id}
          </div>
        </div>
      </li>
    </>
  );
};

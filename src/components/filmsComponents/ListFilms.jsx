import { FilmCard } from "./FilmCard";

export const ListFilms = ({ films }) => {
  if (!films) return;

  if (films)
    return (
      <ul className="grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid gap-10 p-3 overflow-visible w-full sm:w-4/5 mx-auto flex-1 justify-center">
        {films.map((item) => (
          <FilmCard key={item} filmItemURL={item} />
        ))}
      </ul>
    );
};

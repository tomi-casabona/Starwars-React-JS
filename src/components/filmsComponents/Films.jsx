import { ListFilms } from "./ListFilms";

export const Films = ({ starship }) => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="my-10 font-orbitron p-3 uppercase border-t-4 border-b-4 border-gray-500 text-white text-2xl">
        Films
      </h2>
      <ListFilms films={starship.films} />
    </div>
  );
};

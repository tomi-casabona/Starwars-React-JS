export const getFilmIdFromURL = (filmURL) => {
  return filmURL.replace("https://swapi.dev/api/films/", "").replace("/", "");
};

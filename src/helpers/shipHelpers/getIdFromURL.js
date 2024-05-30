export const getIdFromURL = (starshipURL) => {
  return starshipURL
    .replace("https://swapi.dev/api/starships/", "")
    .replace("/", "");
};

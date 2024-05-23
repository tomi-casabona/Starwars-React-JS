export const getPilotIdFromURL = (pilotURL) => {
  return pilotURL.replace("https://swapi.dev/api/people/", "").replace("/", "");
};

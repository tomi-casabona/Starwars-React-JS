export const getStarshipInfo = async ( page ) => {
  const url = `https://swapi.dev/api/starships/?page=${page}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

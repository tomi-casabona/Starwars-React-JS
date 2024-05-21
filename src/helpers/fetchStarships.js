export const fetchStarships = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};

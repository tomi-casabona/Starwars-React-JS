export const fetchPilotInfo = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("may the force be with you");
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};

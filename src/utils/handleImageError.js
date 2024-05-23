export const handleImageError = (event) => {
  event.target.onerror = null;
  event.target.src =
    'https://i0.wp.com/teamsbackground.net/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg?w=1920&ssl=1';
};
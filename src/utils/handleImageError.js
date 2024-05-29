export const handleImageError = (event) => {
  event.target.onerror = null;
  event.target.src =
    'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
};
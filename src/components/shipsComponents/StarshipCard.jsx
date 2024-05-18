export const StarshipCard = ({ starship }) => {
  console.log(starship.name);
  return (
    <div className="flex flex-col m-4 p-4 border-sky-200 rounded-lg bg-black text-white">
      <div className="font-bold text-xl">{starship.name}</div>
      <div className="font-normal text-lg">{starship.model}</div>
    </div>
  );
};

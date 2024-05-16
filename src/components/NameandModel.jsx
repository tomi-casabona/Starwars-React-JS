export const NameandModel = ({ starShip }) => {
  return (
    <div className="flex flex-col m-4 border-sky-200 rounded">
      <div className="font-bold text-xl">{starShip.name}</div>
      <div className="font-normal text-lg">{starShip.model}</div>
    </div>
  );
};

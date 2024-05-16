import { NameandModel } from "../NameandModel";

export const ListStarships = ({ starShipsArray }) => {
  // url is used like ID in key parameter
  starShipsArray.map((starShip) => {
    return <NameandModel key={starShip.url} starShip={starShip} />;
  });
};

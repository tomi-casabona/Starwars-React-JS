import { getAuth, signOut } from "firebase/auth";
import { appFirebase } from "../credenciales";
//import { ListStarships } from "./utils/ListStarships";

export const LoggedIn = () => {
  const auth = getAuth(appFirebase);
  

  return (
    <div>

      {/* <ListStarships starShips={starship} /> */}
      <button className="btn btn-secondary" onClick={() => signOut(auth)}>
        sign Out
      </button>
    </div>
  );
};

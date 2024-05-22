import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { appFirebase } from "../credenciales";
export const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth(appFirebase);

  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <header className="w-full flex justify-center items-center bg-transparent text-white h-36 border-b-[1px] border-gray-500">
      <div className="w-1/4 p-4 flex justify-center">
        <div className="btn btn-ghost" onClick={() => navigate("/")}>
          Social Media
        </div>
      </div>
      <div
        className="w-2/4 h-full cursor-pointer flex items-center"
        onClick={() => navigate("/")}
      >
        <img
          className="h-3/5 mx-auto"
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
        />
      </div>
      <div className="w-1/4 flex justify-center">
        <button
          className="btn btn-ghost uppercase"
          onClick={() => navigate("/logIn")}
        >
          Log In
        </button>
        <button
          className="btn btn-ghost uppercase"
          onClick={() => navigate("/signIn")}
        >
          SignIn
        </button>
        <button className="btn btn-ghost uppercase" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </header>
  );
};

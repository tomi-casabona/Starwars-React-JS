import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { appFirebase } from "../firebase/firebase-config";
import { NavBar } from "./NavBar";

export const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth(appFirebase);

  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <>
      <header className="bg-black bg-opacity-75">
        <div className="w-3/4 flex lg:flex-row flex-col gap-3 justify-center items-center bg-transparent text-white lg:h-36 mx-auto mb-5 mt-10 lg:my-0">
          <ul className="hidden lg:flex w-1/4 p-4 gap-4">
            <li className="w-6 hover:scale-110 opacity-75 hover:opacity-100">
              <a target="_blank" href="https://www.tiktok.com/@starwars">
                <img
                  src="https://lumiere-a.akamaihd.net/v1/images/tiktok-logo-white_dd1a4867.svg?region=0%2C0%2C100%2C100"
                  alt="TikTok"
                />
              </a>
            </li>
            <li className="w-6 hover:scale-110 opacity-75 hover:opacity-100">
              <a target="_blank" href="https://www.instagram.com/starwars/">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
                  alt="Instagram"
                />
              </a>
            </li>
            <li className="w-6 hover:scale-110 opacity-75 hover:opacity-100">
              <a target="_blank" href="https://twitter.com/starwars">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="w-6 hover:scale-110 opacity-75 hover:opacity-100">
              <a target="_blank" href="https://www.facebook.com/StarWars">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
                  alt="Facebook"
                />
              </a>
            </li>
            <li className="w-6 hover:scale-110 opacity-75 hover:opacity-100">
              <a target="_blank" href="https://www.youtube.com/user/starwars">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png"
                  alt="YouTube"
                />
              </a>
            </li>
          </ul>
          <div
            className="w-full lg:w-2/4 lg:h-full flex items-center"
            onClick={() => navigate("/")}
          >
            <div className="h-[32px] w-[312px] lg:h-[80px] lg:w-[184px] mx-auto bg-cover bg-no-repeat bg-center cursor-pointer bg-logo-line lg:bg-logo-block"></div>
          </div>
          <div className="lg:w-1/4 flex justify-center">
            {/* TODO Comprovar si el usuario está loggeado. Si está loggeado poner su nombre y botón Sign Out. Sinó botón Log In y Sign In */}
            <button
              className="text-nowrap flex items-center gap-2 px-2 py-1 mx-3 hover:[text-shadow:#FFF_1px_0_10px;] uppercase font-sans font-bold"
              onClick={() => navigate("/logIn")}
            >
              <img
                className="inline"
                src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg"
              />
              Log In
            </button>
            <button
              className="text-nowrap flex items-center gap-2 px-2 py-1 mx-3 hover:[text-shadow:#FFF_1px_0_10px;] uppercase font-sans font-bold"
              onClick={() => navigate("/signIn")}
            >
              Sign In
            </button>
            <button
              className="text-nowrap flex items-center gap-2 px-2 py-1 mx-3 hover:[text-shadow:#FFF_1px_0_10px;] uppercase font-sans font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>

        <NavBar />
      </header>
    </>
  );
};

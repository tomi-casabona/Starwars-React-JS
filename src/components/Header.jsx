import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { appFirebase } from '../firebase/firebase-config';
import { NavBar } from './NavBar';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const auth = getAuth(appFirebase);
  
  const handleSignOut = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <>
      <header className="bg-black bg-opacity-75">
        <div className="w-3/4 flex lg:flex-row flex-col gap-3 justify-center items-center bg-transparent text-white lg:h-36 mx-auto mb-5 pt-10 lg:my-0">
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
            onClick={() => navigate('/')}
          >
            <div className="h-[32px] w-[312px] lg:h-[80px] lg:w-[184px] mx-auto bg-cover bg-no-repeat bg-center cursor-pointer bg-logo-line lg:bg-logo-block"></div>
          </div>
          <div className="lg:w-1/4 flex justify-center">
            {isLogged ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full bg-slate-50">
                      <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li className="p-3 text-wrap">
                      Logged In As:
                      <br />
                      {user.email}
                    </li>
                    <li>
                      <a className="p-3" onClick={handleSignOut}>
                        <img src="/src/assets/logout.png" />
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <button
                  className="text-nowrap flex items-center gap-2 px-2 py-1 mx-3 hover:[text-shadow:#FFF_1px_0_10px;] uppercase font-sans font-bold"
                  onClick={() => navigate('/logIn')}
                >
                  <img
                    className="inline"
                    src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg"
                  />
                  Log In
                </button>
              </>
            )}
          </div>
        </div>

        <NavBar />
      </header>
    </>
  );
};

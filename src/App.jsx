import "./assets/fonts.css";
import "./assets/App.css";
import { appFirebase } from "./firebase/firebase-config.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { AppRoutes } from "./helpers/routes.jsx";
import { Footer } from "./components/Footer.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setEmail, setIsLogged } from "./redux/slices/userSlice.js";

function App() {
  const dispatch = useDispatch();
  const auth = getAuth(appFirebase);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        dispatch(setIsLogged(true));
        dispatch(setEmail(userFirebase.email));
      } else {
        dispatch(setIsLogged(false));
        dispatch(setEmail("vACIO  "));
      }
    });

    // Limpiar la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, [auth]);

  return (
    <BrowserRouter>
      <div className="bg-body-img bg-left-top bg-repeat bg-full-auto min-h-screen font-kanit flex flex-col">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/pages/Home.jsx";
import { Login } from "./components/pages/Login.jsx";
import { auth } from "./credenciales.js";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedIn } from "./components/pages/LoggedIn.jsx";
import { ProtectedRoute } from "./components/utils/ProtectedRoute.jsx";
import { Header } from "./components/Header.jsx";
import { SignIn } from "./components/pages/SignIn.jsx";
import { StarShipDetail } from "./components/shipsComponents/StarshipDetail.jsx";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
=======
const auth = getAuth(appFirebase);
>>>>>>> 0f463a1b7e322818bc415b82cd8e552bcc4ddeec

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      console.log(userFirebase);
      if (userFirebase) {
        setIsLogged(userFirebase);
      } else {
        setIsLogged(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
            <Route element={<ProtectedRoute isAuthorized={isLogged} />}>
              <Route path="/loggedIn" element={<LoggedIn />} />
              <Route path="/starshipDetail" element={<StarShipDetail />} />
            </Route>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;

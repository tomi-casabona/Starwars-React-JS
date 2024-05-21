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
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

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
      <Provider store={store}>
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
      </Provider>
      ;
    </>
  );
}

export default App;

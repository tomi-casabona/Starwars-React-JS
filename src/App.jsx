import { useState } from "react";
import "./App.css";
import { Home } from "./components/pages/Home.jsx";
import { Login } from "./components/pages/Login.jsx";
import { appFirebase } from "./credenciales.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedIn } from "./components/pages/LoggedIn.jsx";
import { ProtectedRoute } from "./components/utils/ProtectedRoute.jsx";
import { Header } from "./components/Header.jsx";
import { SignIn } from "./components/pages/SignIn.jsx";
import { StarShipDetail } from "./components/shipsComponents/StarshipDetail.jsx";
const auth = getAuth(appFirebase);

function App() {
  const [isLogged, setIsLogged] = useState(true);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setIsLogged(userFirebase);
    }
  });

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

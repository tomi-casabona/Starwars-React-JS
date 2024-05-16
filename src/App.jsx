import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home.jsx";
import { Login } from "./components/Login.jsx";
import { appFirebase } from "./credenciales.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedIn } from "./components/LoggedIn.jsx";
import { ProtectedRoute } from "./components/utils/ProtectedRoute.jsx";
import { Header } from "./components/Header.jsx";
const auth = getAuth(appFirebase);

function App() {
  const [isLogged, setIsLogged] = useState(true);

  onAuthStateChanged(auth, (userFirebase) => {
    console.log(userFirebase);
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
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isAuthorized={isLogged} />}>
            <Route path="/loggedIn" element={<LoggedIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;

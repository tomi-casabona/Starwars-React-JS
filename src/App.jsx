import { useEffect, useState } from "react";
import './assets/fonts.css';
import "./assets/App.css";
import { auth } from "./credenciales.js";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { AppRoutes } from "./helpers/routes.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
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
    <BrowserRouter>
      <div className="bg-body-img bg-fixed bg-cover bg-no-repeat min-h-screen font-kanit flex flex-col">
        <Header />
        <AppRoutes isLogged={isLogged} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

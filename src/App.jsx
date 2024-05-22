import { useEffect, useState } from "react";
import "./assets/fonts.css";
import "./assets/App.css";
import { auth } from "./credenciales.js";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { AppRoutes } from "./helpers/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

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

    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-body-img bg-cover bg-no-repeat min-h-screen font-kanit">
          <Header />
          <AppRoutes isLogged={isLogged} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

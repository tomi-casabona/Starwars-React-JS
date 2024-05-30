import "./assets/fonts.css";
import "./assets/App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/serviceComponents/Header.jsx";
import { Footer } from "./components/serviceComponents/Footer.jsx";
import { AppRoutes } from ".//routes/routes.jsx";
import useAuth from "./hooks/useAuth.js";

function App() {
  useAuth(); // Llamada al custom hook

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

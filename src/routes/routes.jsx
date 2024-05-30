import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { SignIn } from "../components/pages/SignIn";
import { StarShips } from "../components/pages/StarShips";
import { StarShipDetail } from "../components/shipsComponents/StarshipDetail"
import { PilotDetail } from "../components/pages/PilotDetail";
import { ProtectedRoute } from "../routes/ProtectedRoute";

export const AppRoutes = () => {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" />}></Route>
      <Route path="/" element={<Home />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route element={<ProtectedRoute isAuthorized={isLogged} />}>
        <Route path="/starships" element={<StarShips />} />
        <Route path="/pilot" element={<PilotDetail />} />
        <Route path="/starshipDetail" element={<StarShipDetail />} />
      </Route>
    </Routes>
  );
};

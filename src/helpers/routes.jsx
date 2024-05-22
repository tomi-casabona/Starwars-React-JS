import { Route, Routes } from "react-router-dom"
import { Home } from "../components/pages/Home"
import { Login } from "../components/pages/Login"
import { SignIn } from "../components/pages/SignIn"
import { ProtectedRoute } from "../components/utils/ProtectedRoute"
import { LoggedIn } from "../components/pages/LoggedIn"
import { StarShipDetail } from "../components/shipsComponents/StarshipDetail"

export const AppRoutes = (isLogged) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route element={<ProtectedRoute isAuthorized={isLogged} />}>
        <Route path="/loggedIn" element={<LoggedIn />} />
        <Route path="/starshipDetail" element={<StarShipDetail />} />
      </Route>
    </Routes>
  )
}
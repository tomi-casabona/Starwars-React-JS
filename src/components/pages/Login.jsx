import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { appFirebase } from "../../credenciales";
import { useNavigate } from "react-router-dom";

const auth = getAuth(appFirebase);
console.log(auth)

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // El usuario ha iniciado sesión exitosamente
      // TODO : cambiar estado general a logeado
      Navigate("/LoggedIn");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-black text-white h-screen w-full">
      <h2 className="text-center font-extrabold text-2xl">Iniciar sesión</h2>
      <form
        className="border-4 border-red-400 mx-auto p-4 flex flex-col w-1/2 rounded-md self-center  "
        onSubmit={handleLogin}
      >
        <label htmlFor="email">Correo electrónico</label>
        <input
          className="m-2 p-2 text-black"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          className="m-2 p-2 text-black"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Iniciar sesión
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

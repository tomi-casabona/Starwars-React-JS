import { useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, userEmail, userPassword);
      navigate("/logIn");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-black text-white h-screen w-full">
      <h2 className="text-center font-extrabold text-2xl">Create an account</h2>
      <form
        className="border-4 border-red-400 mx-auto p-4 flex flex-col w-1/2 rounded-md self-center"
        onSubmit={handleSignIn}
      >
        <label htmlFor="email">Email</label>
        <input
          className="m-2 p-2 text-black"
          type="email"
          id="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="m-2 p-2 text-black"
          type="password"
          id="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Done
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

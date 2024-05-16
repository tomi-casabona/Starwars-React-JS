import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full justify-around bg-black text-white">
      <div className="w-1/4"></div>
      <h1 className="w-2/4 text-center font-extrabold text-3xl p-4">
        StarWars
      </h1>
      <div className="flex w-1/4 text-center justify-end font-bold text-lg p-4 mx-2 gap-2 ">
        <div className="btn" onClick={() => navigate("/logIn")}>
          {" "}
          LogIn
        </div>
        <div className="btn">SignIn</div>
      </div>
    </div>
  );
};

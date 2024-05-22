import { useSelector } from "react-redux";

export const Prueba = () => {
  const user = useSelector((state) => state.user);
  console.log(user)
    return (
    <div>
      <h1>{user.email}</h1>
    </div>
  );
};

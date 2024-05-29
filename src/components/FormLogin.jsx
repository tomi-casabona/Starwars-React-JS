import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { appFirebase } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const auth = getAuth(appFirebase);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/StarShips");
    } catch (error) {
      setError("root", { message: error.message });
    }
  };

  return (
    <form
      className="my-3 form-control gap-3"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="relative rounded-xl overflow-hidden">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Example structure for email: username@email.com",
            },
          })}
          className="autofill:bg-gray-300 w-full pt-6 pb-3 px-4 bg-gray-200 font-sans focus:outline-none focus:border-b-black focus:text-lg hover:border-b-gray-500 border-b-2 duration-100 transition-colors peer text-black"
          type="email"
          id="email"
          placeholder="ExampleUser@gmail.com"
        />
        {errors.email && (
          <div className="text-red-500 p-2"> {errors.email.message} </div>
        )}
        <label
          htmlFor="email"
          className={`text-gray-500 absolute left-4 cursor-text peer-focus:text-xs peer-focus:top-1 duration-100 font-sans 
         
        }`}
        >
          Email
        </label>
      </div>
      <div className="relative rounded-xl overflow-hidden">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 7,
              message: "password must have at least 7 characters",
            },
          })}
          className="w-full pt-6 pb-3 px-4 bg-gray-200 font-sans focus:outline-none focus:text-lg focus:border-b-black hover:border-b-gray-500 border-b-2 duration-100 transition-colors peer text-black"
          type="password"
          id="password"
          placeholder="*******"
        />
        {errors.password && (
          <div className="text-red-500 p-2"> {errors.password.message} </div>
        )}
        <label
          htmlFor="password"
          className={`text-gray-500 absolute left-4 cursor-text peer-focus:text-xs peer-focus:top-1 duration-100 font-sans 
       
        `}
        >
          Password
        </label>
      </div>
      <button
        className="bg-yellow-300 rounded-full p-4 text-zinc-900 hover:bg-yellow-400 duration-200"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Continue"}
      </button>
      {errors.root && (
        <div className="text-red-500"> {errors.root.message} </div>
      )}
    </form>
  );
};

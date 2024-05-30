import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { appFirebase } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const auth = getAuth(appFirebase);
export const FormSignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/StarShips");
    } catch (error) {
      setError("root", { message: error.message });
    }
  };

  const password = watch("password");
  return (
    <form
      className="my-3 form-control gap-3"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative rounded-xl overflow-hidden">
        <input
          {...register("email", {
            required: "email is required",
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
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <label
          htmlFor="email"
          className={`text-gray-500 absolute left-4 cursor-text peer-focus`}
        >
          Email
        </label>
      </div>
      <div className="relative rounded-xl overflow-hidden">
        <input
          {...register("password", {
            required: "Password is required",
            validate: {
              minLength: (value) =>
                value.length >= 7 ||
                "Password must be at least 7 characters long",
            },
          })}
          className="autofill:bg-gray-300 w-full pt-6 pb-3 px-4 bg-gray-200 font-sans focus:outline-none focus:border-b-black focus:text-lg hover:border-b-gray-500 border-b-2 duration-100 transition-colors peer text-black"
          type="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <label
          htmlFor="password"
          className={`text-gray-500 absolute left-4 cursor-text peer-focus`}
        >
          Password
        </label>
      </div>
      <div className="relative rounded-xl overflow-hidden">
        <input
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: {
              matchesPassword: (value) =>
                value === password || "Passwords do not match",
              minLength: (value) =>
                value.length >= 7 ||
                "Password must be at least 7 characters long",
            },
          })}
          className="autofill:bg-gray-300 w-full pt-6 pb-3 px-4 bg-gray-200 font-sans focus:outline-none focus:border-b-black focus:text-lg hover:border-b-gray-500 border-b-2 duration-100 transition-colors peer text-black"
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <div className="text-red-500">{errors.confirmPassword.message}</div>
        )}
        <label
          htmlFor="confirmPassword"
          className={`text-gray-500 absolute left-4 cursor-text peer-focus`}
        >
          Confirm Password
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full mt-4"
        disabled={isSubmitting}
      >
        Create Account
      </button>
      {errors.root && (
        <div className="text-red-500 mt-2">{errors.root.message}</div>
      )}
    </form>
  );
};

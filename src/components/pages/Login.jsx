import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { appFirebase } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const auth = getAuth(appFirebase);

export const Login = () => {
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
    <div className="flex-1 bg-login bg-cover bg-no-repeat">
      <div className="text-start w-11/12 md:w-1/2 lg:w-1/3 bg-white mx-auto rounded-2xl my-5 p-10">
        <div className="max-w-20 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 87 36"
            className="myDisneyLogo"
          >
            <title>My Disney Logo</title>
            <path d="M49.191 17.7934C49.1721 17.139 48.5461 16.0904 48.1094 16.1046C47.7625 16.1157 47.4613 16.3553 47.3383 17.4796C47.2153 18.6039 47.1712 20.4014 47.1396 21.3396C47.1065 22.2778 47.1633 24.1526 47.2264 24.8133C47.2894 25.474 47.6395 25.9202 48.39 25.8981C49.1406 25.876 49.2983 25.66 49.3629 25.2233C49.4276 24.7865 49.4591 23.842 49.4134 22.8565C49.3676 21.871 49.2115 18.4493 49.191 17.7934Z"></path>
            <path d="M28.4897 6.0007C27.0217 5.7831 25.2825 5.65854 24.2592 5.6885C21.4966 5.77049 19.8394 6.39963 19.4988 6.52893C19.0006 6.71814 18.1854 7.88182 18.1964 8.25394C18.2122 8.76483 18.8413 9.12907 19.677 9.10384C20.1343 9.08965 20.8801 9.04234 20.8706 8.69702C20.8596 8.35171 19.5635 8.2839 19.5588 8.10888C19.5509 7.84713 21.1545 7.56015 23.8271 7.48131C30.6121 7.27948 43.2769 13.1641 43.4677 19.5706C43.6033 24.1559 37.4996 25.1304 34.8285 25.2092C33.6932 25.2424 32.5342 25.1146 31.41 24.8765C31.3895 23.4653 31.3485 21.7734 31.3295 21.119C31.309 20.4379 31.3201 19.424 31.3232 18.5835C33.802 18.5993 37.8244 19.0266 37.8528 20.0011C37.8717 20.6476 36.421 20.7406 36.4321 21.1411C36.4384 21.3492 37.2283 21.734 37.9032 21.7135C38.5781 21.693 39.8632 20.9503 39.8206 19.4981C39.7654 17.6249 36.7332 16.0417 31.6733 16.1931L31.4005 16.2026C31.3973 15.8904 31.3768 14.1401 31.164 13.1799C30.9306 12.1234 30.3141 11.4328 30.0161 11.4407C29.275 11.4627 29.0369 15.0373 28.9864 16.4407C25.3803 17.0004 22.2976 18.4148 22.3481 20.1099C22.3828 21.2483 24.7937 24.1339 28.7972 25.9093C28.9202 27.0131 29.2466 28.3691 30.0839 28.3439C31.4525 28.3029 31.38 27.792 31.4131 26.827C32.8922 27.2149 34.5163 27.431 36.2633 27.3789C42.8938 27.1818 46.2902 23.4937 46.1735 19.5627C46.0016 13.7838 37.0328 7.26845 28.4882 6.00228L28.4897 6.0007ZM28.7672 24.1055C25.6278 22.9418 23.2374 21.1569 23.209 20.2281C23.1822 19.3404 26.4273 18.8689 28.9628 18.6797C28.9486 20.1887 28.9123 22.2039 28.7672 24.1055Z"></path>
            <path d="M54.3426 10.053C54.3173 9.21098 53.7717 8.39578 52.452 8.41628C52.3274 8.10565 51.9096 7.47808 50.4195 7.52223C47.1729 7.61842 44.6752 10.023 44.7304 11.9183C44.7493 12.5349 45.0458 13.0741 45.4825 13.5156C45.369 13.8247 45.358 14.0328 45.3611 14.1511C45.3706 14.4806 45.8657 15.3495 46.2473 15.3384C46.5689 15.329 46.7881 15.0278 47.0987 14.539C47.6285 14.744 48.1552 14.848 48.5746 14.8354C51.6273 14.744 54.3977 11.8837 54.3426 10.053ZM47.2943 10.7988C46.8575 11.2892 46.5106 11.7212 46.2552 12.0981C46.2094 12.0208 46.1653 11.8994 46.159 11.7086C46.1464 11.2892 46.8701 9.68245 48.6913 9.54999C48.2277 9.86851 47.7578 10.2753 47.2943 10.7972V10.7988ZM52.176 9.76444C52.7657 9.74709 52.9203 10.1113 52.9329 10.515C52.9518 11.1426 51.8149 12.9764 49.2542 13.0521C48.6929 13.0694 48.2198 13.0268 47.8414 12.9638C48.2167 12.4324 50.1656 9.82436 52.1745 9.76444H52.176Z"></path>
            <path d="M56.0294 15.928C54.2413 15.9816 50.9143 16.5477 50.4381 18.1734C50.211 18.9507 50.118 19.8905 50.7755 20.3068C51.4331 20.7231 53.3583 20.7136 54.6418 20.7798C55.9254 20.846 58.1439 21.1992 58.166 21.9246C58.1818 22.4717 57.2451 23.4903 54.153 23.5834C50.6825 23.6859 51.6538 22.2147 52.3476 22.1942C53.5633 22.1579 53.4593 23.0157 55.569 22.9526C56.0357 22.9385 57.0922 22.6736 57.0764 22.1579C57.0575 21.5225 54.6639 20.9643 53.1171 21.01C51.5718 21.0558 50.651 21.8489 50.6778 22.7429C50.7077 23.7489 52.1284 25.7294 55.5753 25.6269C56.7185 25.5938 58.2101 25.0261 58.6548 24.818C59.0048 24.654 59.7806 24.2204 59.7207 22.1674C59.6434 19.5673 57.0622 19.5073 55.4555 19.4096C53.8913 19.315 52.1868 19.233 52.1757 18.8624C52.1552 18.1623 57.8301 17.9211 58.9544 17.8076C59.9084 17.7114 60.0834 17.0128 60.0739 16.6786C60.0566 16.1078 57.8175 15.876 56.0294 15.928Z"></path>
            <path d="M65.473 14.528C64.579 14.5548 65.5298 16.1867 66.14 19.3514C66.4097 20.75 66.7266 22.0177 66.3009 22.0304C65.8735 22.043 63.3428 16.5668 62.1334 16.6014C60.6433 16.6456 60.145 21.8175 60.1892 23.3391C60.2349 24.8607 60.5881 25.6318 61.3923 25.6081C61.9237 25.5923 62.2548 25.083 62.3147 24.1307C62.3746 23.1783 62.3936 20.0184 62.619 20.0121C63.0385 19.9994 64.8817 25.1098 66.5011 25.0625C68.2088 25.0121 68.4737 22.546 68.4169 20.6617C68.2971 16.6046 66.1306 14.509 65.4699 14.528H65.473Z"></path>
            <path d="M75.038 22.6248C74.3694 22.6453 72.7422 22.9512 72.143 23.1215C71.5438 23.2918 71.0787 23.3943 71.2269 22.9307C71.3451 22.5617 71.6053 21.685 71.7062 21.3444L74.7621 21.253C75.3581 21.2356 75.3896 20.936 75.4401 20.1934C75.4905 19.4507 74.986 19.5453 74.4136 19.5626C74.4136 19.5626 73.4013 19.6036 72.3196 19.6572L72.8037 18.3674C73.9153 18.3264 75.0743 18.205 75.7917 18.1845C77.1935 18.1435 77.3275 17.784 77.3228 17.6389C77.3181 17.4939 77.1777 17.1202 76.8087 16.5904C76.4382 16.0621 76.1086 15.8382 74.9497 15.8714C73.8712 15.9029 69.207 16.2829 69.2259 16.9199C69.2338 17.2101 69.6454 17.8565 70.172 18.1088C70.366 18.2019 70.6167 18.2649 70.9068 18.3075L70.1909 19.7834C70.0884 19.7913 70.0017 19.8007 69.9323 19.8086C69.0651 19.9064 69.3 20.4803 69.3962 21.0007C69.4388 21.2309 69.494 21.3365 69.5649 21.3823C69.2701 22.1817 68.961 23.2113 68.9847 23.9792C69.0272 25.4283 70.2855 26.2372 71.2111 26.2088C73.3697 26.1442 75.4369 24.3987 75.8201 24.0329C76.2033 23.667 75.705 22.6027 75.0364 22.6216L75.038 22.6248Z"></path>
            <path d="M86.2086 19.3893C86.1581 17.6848 85.5053 16.4754 84.4126 16.5069C82.8137 16.5542 80.5163 18.9714 78.6699 22.0036C78.5043 20.7722 79.4756 18.8784 80.3035 17.5523C80.8853 16.622 80.7828 15.5151 80.5416 15.523C80.2026 15.5325 76.9291 18.306 77.0411 22.1093C77.0631 22.8472 77.2555 23.4685 77.5756 23.9746C76.3236 26.4439 75.4816 29.0614 75.54 31.0324C75.6062 33.2525 76.9685 34.0803 77.3832 34.0677C77.7979 34.0551 77.8184 33.3991 77.8925 32.9088C78.3135 30.1368 79.0405 27.6801 79.8698 25.6161C80.1978 25.6981 80.5226 25.7375 80.8238 25.728C83.3625 25.6523 86.3048 22.6186 86.2086 19.3893ZM80.9626 23.2051C82.4905 20.2155 84.0673 18.5126 84.6223 18.4953C85.5842 18.4669 84.7705 22.8141 80.9626 23.2051Z"></path>
            <path d="M20.7475 17.3569C20.5725 17.2008 20.3675 17.1204 20.1373 17.1204C19.9796 17.1204 19.8282 17.1629 19.6895 17.2481C19.5476 17.3348 19.4388 17.4704 19.3678 17.6486L16.9459 23.0412C16.9285 23.0791 16.897 23.1485 16.8654 23.2147C16.8449 23.1485 16.8229 23.0822 16.8087 23.046C16.7898 22.9955 16.7204 22.852 16.7204 22.852L14.3678 17.6312C14.2101 17.2922 13.9452 17.1204 13.581 17.1204C13.1316 17.1093 12.6223 17.4736 12.6381 17.9466C12.6381 18.0696 12.6633 18.1737 12.7122 18.2793L15.9068 25.0658C15.7065 25.49 15.5078 25.9142 15.3076 26.3383C14.9891 27.0163 14.6705 27.6928 14.3505 28.3708C14.2101 28.6672 14.0651 28.9495 14.0682 29.2696C14.0603 29.7205 14.3915 30.1021 14.8582 30.0911C15.3943 30.0911 15.6687 29.4588 15.6687 29.4588L20.9399 18.2777C20.9888 18.1689 21.014 18.0507 21.014 17.9293C21.014 17.7085 20.9241 17.5146 20.7459 17.3553L20.7475 17.3569Z"></path>
            <path d="M11.1464 14.113C10.9761 13.9364 10.7553 13.8481 10.4904 13.8481C10.1167 13.8481 9.81399 14.0642 9.59008 14.4883L5.8578 21.6265C5.8578 21.6265 5.79 21.7479 5.77108 21.7921C5.75216 21.8362 5.72062 21.9072 5.7017 21.9513C5.68278 21.9087 5.64966 21.8362 5.63232 21.7921C5.61497 21.7495 5.5456 21.6265 5.5456 21.6265L1.81174 14.4883C1.58783 14.0626 1.28351 13.8481 0.911389 13.8481C0.646487 13.8481 0.425735 13.938 0.255441 14.113C0.0867238 14.2881 0 14.5167 0 14.7911V25.004C0 25.2673 0.0772631 25.4833 0.228636 25.6473C0.381585 25.8129 0.589722 25.8965 0.843587 25.8965C1.09745 25.8965 1.3182 25.8145 1.46642 25.6552C1.61306 25.4975 1.68717 25.2768 1.68717 25.0024V17.7523L1.68402 17.6009L1.76286 17.7901L4.81554 23.5092C5.03944 23.9223 5.33746 24.132 5.70012 24.132C6.06279 24.132 6.3608 23.9223 6.5847 23.5092L9.63738 17.7901L9.71622 17.6009L9.71307 17.7523V25.0024C9.71307 25.2768 9.78718 25.4959 9.93382 25.6552C10.082 25.816 10.2918 25.8965 10.5567 25.8965C10.8216 25.8965 11.0187 25.8129 11.1716 25.6473C11.323 25.4833 11.4002 25.2673 11.4002 25.004V14.7911C11.4002 14.5167 11.3151 14.2881 11.1448 14.113H11.1464Z"></path>
          </svg>
        </div>
        <h2 className="font-sans font-bold text-zinc-900 text-2xl">
          Log In to continue:
        </h2>
        <p className="my-4 font-sans text-sm">
          Log in to Star Wars Starship Catalog to view a complete list of the
          Starships from the movie.
        </p>
        <p className="font-normal text-gray-500">
          You don't have an account?{" "}
          <a
            href="/signIn"
            className="underline hover:no-underline text-gray-700"
          >
            Register Now
          </a>
          !
        </p>
        <form
          className="my-3 form-control gap-3"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="relative rounded-xl overflow-hidden">
            <input
              {...register("email", {
                required: "Example structure for email: username@email.com",
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className="autofill:bg-gray-300 w-full pt-6 pb-3 px-4 bg-gray-200 font-sans focus:outline-none focus:border-b-black hover:border-b-gray-500 border-b-2 duration-100 transition-colors peer text-black "
              type="email"
              id="email"
              placeholder="ExapleUser@gmail.com"
            />
            {errors.email && (
              <div className="text-red-500"> {errors.email.message} </div>
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
                  value: 10,
                  message: "password must have at least 10 characters",
                },
              })}
              className="w-full pt-6 pb-3 px-4 bg-gray-200 font-sans focus:outline-none focus:border-b-black hover:border-b-gray-500 border-b-2 duration-100 transition-colors peer text-black"
              type="password"
              id="password"
              placeholder="*******"
            />
            {errors.password && (
              <div className="text-red-500"> {errors.password.message} </div>
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
        {/* {error && <p className="font-sans">{error}</p>} */}
        <div className="border-t my-2 text-zinc-700">
          <h3 className="font-sans font-bold mt-3">
            Star Wars Catalog was developed with Swapi API.
          </h3>
          <p className="font-sans text-sm">
            You can use this API heading to{" "}
            <a className="underline" href="https://swapi.dev/api/starships/">
              Swapi Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

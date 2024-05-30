import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setEmail, setIsLogged } from "../redux/slices/userSlice";
import { appFirebase } from "../firebase/firebase-config";

const useAuth = () => {
  const dispatch = useDispatch();
  const auth = getAuth(appFirebase);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        dispatch(setIsLogged(true));
        dispatch(setEmail(userFirebase.email));
      } else {
        dispatch(setIsLogged(false));
        dispatch(setEmail(false));
      }
    });

    return () => unsubscribe();
  }, [auth, dispatch]);
};

export default useAuth;

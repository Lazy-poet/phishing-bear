import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ActiveModal,
  setLogOut,
  toggleModal,
} from "../../redux/slices/auth.slice";
import { authServices } from "../../services";
import store from "store";
import { useRouter } from "next/router";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const token = store.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!}`);
        if (token) {
          const userData = await authServices.getMe();
          if (userData.error && userData.status === 401) {
            dispatch(setLogOut());
            router.push("/");
            dispatch(toggleModal(ActiveModal.LOGIN));
          }
        }
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

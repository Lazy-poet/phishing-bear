import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ActiveModal,
  setLogOut,
  toggleModal,
} from "../../redux/slices/auth.slice";
import { authServices } from "../../services";
import store from "store";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { push, query, isReady } = useRouter();
  const { create_password_token } = query;
  const requestSent = useRef(false);
  useEffect(() => {
    const token = store.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!}`);
    if (!token && create_password_token) {
      dispatch(toggleModal(ActiveModal.CHOOSE_PASSWORD));
      // (async () => {
      //   requestSent.current = true;
      //   const res = await authServices.accountVerify(
      //     create_password_token as string
      //   );
      //   if (!res) {
      //     setError(true);
      //     push("/");
      //   }
      //   setLoading(false);
      // })();
    }
  }, [create_password_token]);
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

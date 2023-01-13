import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header, Footer } from "@components";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useCustomStyletron } from "../styles/custom-styles";
import { toggleModal, ActiveModal } from "../../redux/slices/auth.slice";

const PrivateLayout = ({
  children,
  noHeader,
  noFooter,
  headerTheme = "light",
}: {
  headerTheme?: "light" | "dark";
  children: React.ReactNode;
  noHeader?: boolean;
  noFooter?: boolean;
}) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const router = useRouter();
  const [css, theme] = useCustomStyletron();
  const dispatch = useDispatch()
  useEffect(() => {
    if (!isLoggedIn) {
      toast.info("You have to login first", { toastId: "login-again" });
    }
  }, []);

  if (!isLoggedIn && router.isReady) {
    router.push(`/?redirect_path=${router.pathname}`);
    dispatch(toggleModal(ActiveModal.LOGIN));
    return;
  }

  return (
    <>
      <div
        className={css({
          overflowY: "scroll",
          minHeight: "100vh",
          height: "calc(var(--vh, 1vh) * 100)",
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
          background: "#fff",
        })}
      >
        {!noHeader && <Header isPrivate headerTheme={headerTheme} />}
        <main data-scroll-section>{children}</main>
        {!noFooter && <Footer />}
      </div>
    </>
  );
};
export default PrivateLayout;

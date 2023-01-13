import { StyledDarkParagraphText, StyledButton } from "@components";
import { useCustomStyletron } from "../styles/custom-styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setLogOut,
  toggleModal,
  ActiveModal,
} from "../../redux/slices/auth.slice";
import Portal from "./portal";
import { useRouter } from "next/router";

export const LogoutModal = () => {
  const [css, theme] = useCustomStyletron();
  const dispatch = useDispatch();
  const { activeModal } = useSelector((state: any) => state.auth);
  const open = activeModal === ActiveModal.LOGOUT;
  const router = useRouter();

  return (
    <Portal>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 999,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, .5)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "column",
          ...(!open && { transform: "translateY(-100vh)" }),
        }}
      >
        <div
          className={css({
            width: "300px",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "scroll",
            padding: "20px",
            backgroundColor: "white",
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            gap: "20px",
            justifyContent: "flex-start",
            transition: "all 0.2s ease",
          })}
        >
          <StyledDarkParagraphText>
            Do you want to logout?
          </StyledDarkParagraphText>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              gap: "10px",
              marginTop: "10px",
            })}
          >
            <StyledButton
              overrides={{
                backgroundColor: theme.colors.secondary,
                color: theme.colors.bg,
                transition: "all 0.2s ease",

                ":hover": {
                  color: theme.colors.secondary,
                  background: theme.colors.bg,
                },
              }}
              onClick={(e) => {
                e.preventDefault();
                dispatch(setLogOut());
                router.push("/");
              }}
            >
              YES
            </StyledButton>
            <StyledButton
              overrides={{
                background: "#ccc",
                transition: "all 0.2s ease",
                color: "#fff",

                ":hover": {
                  backgroundColor: "transparent",
                  color: "red",
                },
              }}
              onClick={(e) => {
                e.preventDefault();
                dispatch(toggleModal(null));
              }}
            >
              CANCEL
            </StyledButton>
          </div>
        </div>
      </div>
    </Portal>
  );
};

import { useCustomStyletron } from "../../styles/custom-styles";
import Portal from "../portal";
import { LoginModal } from "./login.modal";
import { Signup } from "./signup.modal";
import { ForgotPassword } from "./forgot-password.modal";
import { CreatePassword } from "./create-password.modal";
import { VerificationMailSent } from "./verification.modal";
import { StyleObject } from "styletron-standard";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../redux/slices/auth.slice";
import { useState } from "react";
import { PricingModal } from "./pricing.modal";
import { PersonalIno } from "./personal-info.modal";
type Props = {
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  overrides?: StyleObject;
  closable?: boolean;
};
export const BaseModal = ({
  open,
  onClose,
  children,
  overrides,
  closable=true,
}: Props) => {
  const [css, theme] = useCustomStyletron();
  const dispatch = useDispatch();
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
            width: "800px",
            maxWidth: "calc(100vw - 40px)",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "scroll",
            position: "relative",
            zIndex: 3,
            display: "flex",
            alignItems: "top",
            justifyContent: "center",
            transition: "all 0.2s ease",
            background: "#fff",
            boxSizing: "border-box",
            borderRadius: "15px",
            ...overrides,
          })}
        >
          <svg
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              cursor: "pointer",
              display: closable ? "block" : "none",
            }}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              dispatch(toggleModal(null));
            }}
          >
            <rect
              x="19.6367"
              y="2.66602"
              width="2.4"
              height="24"
              rx="1.2"
              transform="rotate(45 19.6367 2.66602)"
              fill="#381A46"
            />
            <rect
              x="21.334"
              y="19.6367"
              width="2.4"
              height="24"
              rx="1.2"
              transform="rotate(135 21.334 19.6367)"
              fill="#381A46"
            />
          </svg>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export const Modals = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <LoginModal />
      <Signup setEmail={setEmail} />
      <ForgotPassword />
      <CreatePassword />
      <PricingModal />
      <PersonalIno />
      <VerificationMailSent email={email} />
    </>
  );
};

import { StyledDarkParagraphText, StyledButton, InputField } from "@components";
import { PulseLoader } from "react-spinners";
import { useCustomStyletron } from "../../styles/custom-styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal, ActiveModal } from "../../../redux/slices/auth.slice";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { BaseModal } from "./";

import { authServices } from "../../../services";

export const VerificationMailSent = ({ email }: { email: string }) => {
  const [css, theme] = useCustomStyletron();
  const { activeModal } = useSelector((state: any) => state.auth);
  const open = activeModal === ActiveModal.VERIFICATION_MAIL_SENT;
  const [loading, setLoading] = useState(false);

  return (
    <BaseModal
      open={open}
      overrides={{
        width: "400px",
        padding: "40px 30px",
        display: "flex",
        overflowY: "visible",
      }}
    >
      <>
        <div
          className={css({
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            paddingTop: "75px",
          })}
        >
          <img
            src="/assets/images/mail-sent.svg"
            style={{
              width: "150px",
              height: "auto",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <StyledDarkParagraphText size="24px" weight={700}>
            Perfect!
          </StyledDarkParagraphText>
          <StyledDarkParagraphText size="18px" align="center" weight={500}>
            We have sent a verification email to <span style={{fontWeight: 600}}>{email}</span>. Follow
            the link and get started
          </StyledDarkParagraphText>
          <StyledButton
            small
            overrides={{
              background: theme.colors.primary,
              transition: "all 0.2s ease",
              color: theme.colors.dark,
              border: "1px solid #381A46",
              borderRadius: "20px",
              height: "44px",
              ...theme.typography.font(14, 600),
              ":hover": {
                opacity: 0.8,
              },
            }}
          >
            {loading ? (
              <PulseLoader color="#ffffff" size={5} />
            ) : (
              "Didn't receive an email?"
            )}
          </StyledButton>
        </div>
      </>
    </BaseModal>
  );
};

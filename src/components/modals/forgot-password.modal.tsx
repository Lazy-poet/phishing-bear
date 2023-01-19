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

export const ForgotPassword = () => {
  const [css, theme] = useCustomStyletron();
  const { activeModal } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const open = activeModal === ActiveModal.FORGOT_PASSWORD;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    }),

    onSubmit: async (values: any) => {
      setLoading(true);
      authServices.forgotPassword(values).then((data: any) => {
        setLoading(false);
      });
    },
  });
  return (
    <BaseModal open={open}>
      <>
        <div
          className={css({
            display: "none",
            width: "100%",
            [theme.mediaQuery.xsmall]: {
              background: theme.colors.secondary,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "30px",
              gap: "50px",
              maxWidth: "100%",
              flex: 1,
            },
          })}
        >
          <img
            src="/assets/images/forgot-password.svg"
            style={{
              maxWidth: "calc(100% - 20px)",
              height: "auto",
            }}
          />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className={css({
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            padding: "30px",
            gap: "20px",
            height: "100%",
          })}
        >
          <StyledDarkParagraphText size="24px" weight={700}>
            Forgot Password
          </StyledDarkParagraphText>
          <InputField
            type="email"
            label="Email"
            placeholder="Enter your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              formik?.touched.email &&
              formik.errors.email &&
              formik.errors.email
            }
            style={{
              color: theme.colors.dark,
              width: "100%",
              fontWeight: 600,
              margin: 0,
            }}
            inputStyles={{
              border: `1px solid #BCB3C0`,
              borderRadius: "8px",
              height: "42px",
              marginTop: "10px !important",
              "::placeholder": {
                color: "#0E0E0F",
                opacity: 0.5,
                ...theme.typography.font(13, 400),
              },
            }}
          />
          <div
            className={css({
              display: "flex",
              width: "100%",
              justifyContent: "start",
              gap: "5px",
              margin: "10px 0",
            })}
          >
            <StyledButton
              small
              overrides={{
                background: theme.colors.secondary,
                transition: "all 0.2s ease",
                color: "#fff",
                border: "1px solid #381A46",
                borderRadius: "20px",

                ":hover": {},
              }}
            >
              {loading ? <PulseLoader color="#ffffff" size={5} /> : "Reset"}
            </StyledButton>
            <StyledButton
              small
              overrides={{
                background: "transparent",
                transition: "all 0.2s ease",
                color: theme.colors.dark,
              }}
              onClick={(e) => {
                e.preventDefault();
                dispatch(toggleModal(ActiveModal.LOGIN));
              }}
            >
              Back to Login
            </StyledButton>
          </div>
        </form>
      </>
    </BaseModal>
  );
};

import {
  StyledDarkParagraphText,
  StyledButton,
  InputField,
  StyledParagraphText,
} from "@components";
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
import { handleLogin } from "../../../redux/slices/auth.slice";

export const LoginModal = () => {
  const [css, theme] = useCustomStyletron();
  const { activeModal, isLoggedIn } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const open = activeModal === ActiveModal.LOGIN && !isLoggedIn;
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState("password");

  const router = useRouter();
  const { redirect_path } = router.query as { redirect_path: string };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(/^(?=.*)(?=.{6,})/, "At least 6 characters long"),
    }),
    onSubmit: async (values: { [key: string]: string }, { resetForm }) => {
      setLoading(true);
      if (loginType === "email") {
        const data = await authServices.resendVerification({
          email: values.email,
        });
        if (data && !data.error) {
          dispatch(toggleModal(ActiveModal.VERIFICATION_MAIL_SENT));
        }
      } else {
        const data = await authServices.login(values);
        if (data && !data.error) {
          dispatch(handleLogin(data.data.access_token));
          setTimeout(() => {
            resetForm({ values: {} });
            if (data.data.user.subscription) {
              router.push(redirect_path || "/dashboard");
            } else {
              dispatch(toggleModal(ActiveModal.PRICING));
            }
          }, 100);
        }
      }
      setLoading(false);
    },
  });
  return (
    <BaseModal
      open={open}
    >
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
        <StyledParagraphText size="24px" weight={600}>
          Welcome back!
        </StyledParagraphText>
        <img
          src="/assets/images/login-bear.svg"
          style={{
            maxWidth: "calc(100% - 20px)",
            height: "auto",
          }}
        />
        <StyledButton
          small
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleModal(ActiveModal.SIGNUP));
          }}
          overrides={{
            background: theme.colors.primary,
            color: theme.colors.dark,
            borderRadius: "30px",
            border: `1.2px solid ${theme.colors.dark}`,
            padding: "0 20px",
            ...theme.typography.font(13, 500),
          }}
        >
          Don't have an account?
        </StyledButton>
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
          width: "100%",
        })}
      >
        <StyledDarkParagraphText size="24px" weight={700}>
          Log in
        </StyledDarkParagraphText>
        <InputField
          type="email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={
            formik?.touched.email && formik.errors.email && formik.errors.email
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
            color: "#0E0E0F",
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
            gap: "16px",
            justifyContent: "start",
            width: "100%",
          })}
        >
          <div
            className={css({
              display: "flex",
              gap: "8px",
              ...theme.typography.font(12, 500),
            })}
          >
            <input
              type="radio"
              id="usepassword"
              name="loginType"
              checked={loginType === "password"}
              onChange={(e) => setLoginType("password")}
            />
            <label htmlFor="usepassword">Use password</label>
          </div>
          <div
            className={css({
              display: "flex",
              gap: "8px",
              ...theme.typography.font(12, 500),
            })}
          >
            <input
              type="radio"
              id="emaillink"
              name="loginType"
              checked={loginType === "email"}
              onChange={(e) => {
                setLoginType("email");
              }}
            />
            <label htmlFor="emaillink">Link to email</label>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: loginType === "password" ? "block" : "none",
          }}
        >
          <InputField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={
              formik?.touched.password &&
              formik.errors.password &&
              formik.errors.password
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
              color: "#0E0E0F",

              "::placeholder": {
                color: "#0E0E0F",
                opacity: 0.5,
                ...theme.typography.font(13, 400),
              },
            }}
          />
          <StyledDarkParagraphText
            weight={700}
            size="12px"
            align="right"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(toggleModal(ActiveModal.FORGOT_PASSWORD));
            }}
          >
            Forgot Password
          </StyledDarkParagraphText>
        </div>
        <div
          className={css({
            display: loginType === "password" ? "flex" : "none",

            gap: "8px",
            width: "100%",
            ...theme.typography.font(12, 500),
          })}
        >
          <input type="checkbox" />
          <label htmlFor="">Use 2-factor authentication</label>
        </div>
        <div
          className={css({
            display: "flex",
            width: "100%",
            justifyContent: "start",
            gap: "5px",
            margin: "10px 0",
          })}
        >
          {loginType === "password" ? (
            <>
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
                {loading ? <PulseLoader color="#ffffff" size={5} /> : "Login"}
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
                  dispatch(toggleModal(ActiveModal.SIGNUP));
                }}
              >
                Sign up
              </StyledButton>
            </>
          ) : (
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
              {loading ? <PulseLoader color="#ffffff" size={5} /> : "Get link"}
            </StyledButton>
          )}
        </div>
      </form>
    </BaseModal>
  );
};

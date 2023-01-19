import { StyledDarkParagraphText, StyledButton, ListItem } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { BaseModal } from ".";
import { ActiveModal, toggleModal } from "../../../redux/slices/auth.slice";
import { useCustomStyletron } from "../../styles/custom-styles";
import { InputField } from "@components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authServices } from "../../../services";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { handleLogin } from "../../../redux/slices/auth.slice";

export const CreatePassword = () => {
  const [css, theme] = useCustomStyletron();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { activeModal } = useSelector((state: any) => state.auth);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const open = activeModal === ActiveModal.CHOOSE_PASSWORD;

  const { push, query, isReady } = useRouter();
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { create_password_token: token } = query;
  useEffect(() => {
    if (!open) return;
    if (isReady && !token) {
      setLoading(false);
      dispatch(toggleModal(null));
      return;
    }
  }, [isReady, token]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is required")
        .matches(/^(?=.*)(?=.{6,})/, "Must Contain 6 Characters"),
      confirm_password: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          return this.parent.password === value;
        }
      ),
    }),

    onSubmit: async (values: any) => {
      setLoading(true);
      authServices
        .updatePassword({ ...values, access_token: token })
        .then((data: any) => {
          if (!data.error) {
            // dispatch(handleLogin(handleLogin()))
            dispatch(handleLogin(data?.access_token));
            dispatch(toggleModal(ActiveModal.PRICING));
          }
          setLoading(false);
        });
    },
  });
  return (
    <BaseModal
      open={open}
      overrides={{
        width: "450px",
        padding: "40px 30px",
        display: "flex",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "20px",
        }}
      >
        <StyledDarkParagraphText size="18px" weight={600}>
          Choose your password
        </StyledDarkParagraphText>
        <InputField
          type="password"
          name="password"
          label="Password"
          required
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
            color: "#0E0E0F",

            "::placeholder": {
              color: "#0E0E0F",
              opacity: 0.5,
              ...theme.typography.font(13, 400),
            },
          }}
        />
        <InputField
          type="password"
          name="confirm_password"
          label="Confirm Password"
          required
          placeholder="Enter a strong password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          error={
            formik?.touched.confirm_password &&
            formik.errors.confirm_password &&
            formik.errors.confirm_password
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
            color: theme.colors.dark,
            background: "#F4F4F4",
            padding: "10px",
            borderRadius: "15px",
          })}
        >
          <ListItem
            text="Long passwords are great, but they can still be easy to remember!"
            textOverrides={{
              color: theme.colors.dark,
              ...theme.typography.font(13, 500),
            }}
          />
          <ListItem
            text="Take a look at our password guide to get more inspiration, you can change the password after you have checked the guide 😉"
            textOverrides={{
              color: theme.colors.dark,
              ...theme.typography.font(12, 500),
            }}
          />
        </div>

        <div
          className={css({
            display: "flex",
            gap: "5px",
            alignItems: "center",
            height: "fit-content",
          })}
        >
          <input
            type="checkbox"
            id="check1"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
          />
          <label htmlFor="check1">
            By creating an account, I agree to this website's privacy policy and
            terms of service
          </label>
        </div>
        <div
          className={css({
            display: "flex",
            gap: "5px",
            alignItems: "center",
            height: "fit-content",
            padding: "5px 0",
          })}
        >
          <input
            type="checkbox"
            id="check2"
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
          />
          <label htmlFor="check2">I consent to receive marketing emails.</label>
        </div>
        <StyledButton
          small
          disabled={!(checked1 && checked2 && formik.isValid)}
          overrides={{
            background: theme.colors.secondary,
            transition: "all 0.2s ease",
            color: "#fff",
            border: "1px solid #381A46",
            borderRadius: "20px",

            ":hover": {},
          }}
        >
          {loading ? <PulseLoader color="#ffffff" size={5} /> : "Continue"}
        </StyledButton>
      </form>
    </BaseModal>
  );
};

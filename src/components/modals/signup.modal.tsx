import { StyledDarkParagraphText, StyledButton } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { BaseModal } from ".";
import { ActiveModal, toggleModal } from "../../../redux/slices/auth.slice";
import { useCustomStyletron } from "../../styles/custom-styles";
import { InputField } from "@components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authServices } from "../../../services";
import { Dispatch, SetStateAction, useState } from "react";
import { PulseLoader } from "react-spinners";

export const Signup: React.FC<{
  setEmail: Dispatch<SetStateAction<string>>;
}> = ({ setEmail }) => {
  const [css, theme] = useCustomStyletron();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { activeModal, isLoggedIn } = useSelector((state: any) => state.auth);
  const open = activeModal === ActiveModal.SIGNUP && !isLoggedIn;
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
      setEmail(values.email);
      authServices.register(values).then((data: any) => {
        if (!data.error) {
          // dispatch(handleLogin(handleLogin()))
          dispatch(toggleModal(ActiveModal.VERIFICATION_MAIL_SENT));
        }
        setLoading(false);
      });
    },
  });
  return (
    <BaseModal
      open={open}
      overrides={{
        width: "400px",
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
          gap: "30px",
        }}
      >
        <StyledDarkParagraphText size="18px" weight={600}>
          Enter your email to get started
        </StyledDarkParagraphText>
        <InputField
          type="email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          required
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
            "::placeholder": {
              color: "#0E0E0F",
              opacity: 0.5,
              ...theme.typography.font(13, 400),
            },
          }}
        />
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
          {loading ? <PulseLoader color="#ffffff" size={5} /> : "Continue"}
        </StyledButton>
      </form>
    </BaseModal>
  );
};

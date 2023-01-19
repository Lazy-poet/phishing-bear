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
import LocaleSelector from "../header/localeSelector";

export const PersonalIno = () => {
  const [css, theme] = useCustomStyletron();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { activeModal } = useSelector((state: any) => state.auth);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [lang, setLang] = useState(0);
  const open = activeModal === ActiveModal.PERSONAL_INFO;

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
      first_name: "",
      last_name: "",
      phone_number: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      phone_number: Yup.string().required("Phone is required"),
    }),

    onSubmit: async (values: any) => {
      setLoading(true);
      authServices.updateUserProfile({ ...values }).then((data: any) => {
        if (!data.error) {
          // dispatch(handleLogin(handleLogin()))
          dispatch(toggleModal(null));
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
          gap: "15px",
        }}
      >
        <StyledDarkParagraphText size="20px" weight={600}>
          Personal Info
        </StyledDarkParagraphText>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <InputField
            type="text"
            name="first_name"
            label="First name"
            required
            placeholder="Enter first name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={
              formik?.touched.first_name &&
              formik.errors.first_name &&
              formik.errors.first_name
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
                opacity: "0.5 !important",
                ...theme.typography.font(13, 400),
              },
            }}
          />
          <InputField
            type="text"
            name="last_name"
            label="Last name"
            required
            placeholder="Enter last name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={
              formik?.touched.last_name &&
              formik.errors.last_name &&
              formik.errors.last_name
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
        </div>
        <InputField
          type="text"
          name="phone_number"
          label="Phone number"
          required
          placeholder="Enter phone number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={
            formik?.touched.phone && formik.errors.phone && formik.errors.phone
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
        <div>
          <StyledDarkParagraphText size="16px" weight={600}>
            Preferred language
          </StyledDarkParagraphText>
          <div style={{ display: "flex", gap: 10, marginTop: "10px" }}>
            <img
              src="/assets/images/eng.svg"
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                objectFit: "cover",
                padding: "2px",
                cursor: "pointer",
                border:
                  lang === 0 ? `1px solid ${theme.colors.secondary} ` : "none",
              }}
              onClick={() => setLang(0)}
            />
            <img
              src="/assets/images/swe.svg"
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                objectFit: "cover",
                padding: "2px",
                cursor: "pointer",
                border:
                  lang === 1 ? `1px solid ${theme.colors.secondary} ` : "none",
              }}
              onClick={() => setLang(1)}
            />
          </div>
        </div>
        {/* <div>
          <StyledDarkParagraphText size="16px" weight={600}>
            Customize your training
          </StyledDarkParagraphText>
        </div>
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
        </div> */}

        <StyledButton
          top="20px"
          small
          disabled={!(checked1 && checked2 && formik.isValid)}
          overrides={{
            background: theme.colors.secondary,
            transition: "all 0.2s ease",
            color: "#fff",
            border: "1px solid #381A46",
            borderRadius: "20px",
            ...theme.typography.font(14, 400),
            ":hover": {},
          }}
        >
          {loading ? <PulseLoader color="#ffffff" size={5} /> : "Finish"}
        </StyledButton>
      </form>
    </BaseModal>
  );
};

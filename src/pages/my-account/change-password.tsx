import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

import { authServices } from "../../../services";
import { ActiveModal, toggleModal } from "../../../redux/slices/auth.slice";
import {
  PrivateLayout,
  LinkButton,
  InputField,
  Button,
  SEO,
  Alert,
  AccountLinks,
  AccountWrapper,
} from "@components";
import { useCustomStyletron } from "../../styles/custom-styles";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      old_password: Yup.string()
        .required("Current password is required")
        .matches(/^(?=.*)(?=.{6,})/, "At least 6 characters long"),
      new_password: Yup.string()
        .required("New password is required")
        .matches(/^(?=.*)(?=.{6,})/, "At least 6 characters long"),
      confirm_password: Yup.string()
        .required("Confirm password is required")
        .test("passwords-match", "Passwords must match ", function (value) {
          return this.parent.new_password === value;
        }),
    }),

    onSubmit: async (values: any) => {
      setLoading(true);
      const { error } = await authServices.updateUserProfilePassword(values);
      if (!error) {
        toast.info("Updated successfully, please login again");
        dispatch(toggleModal(ActiveModal.LOGOUT));
      }
      setLoading(false);
    },
  });
  const [css, theme] = useCustomStyletron();

  const inputStyles = {
    className: css({
      color: theme.colors.dark,
    }),
    inputStyles: {
      backgroundColor: theme.colors.bg,
      border: `1px solid rgba(0, 0, 0, .3) !important`,
      borderRadius: "5px",
      color: theme.colors.dark,
    },
  };

  return (
    <>
      <SEO />
      <PrivateLayout>
        <AccountWrapper>
          <div className="container shadow rounded-1 bg-white">
            <div className="row">
              <AccountLinks />
              <div className="col-12 col-sm-9 p-3 p-sm-5">
                <form onSubmit={formik.handleSubmit}>
                  <div className="col-md-12 col-lg-6 position-relative">
                    <InputField
                      type={showPassword.oldPassword ? "text" : "password"}
                      name="old_password"
                      placeholder="Enter old password"
                      label="Old Password"
                      required={true}
                      value={formik.values.old_password}
                      onChange={formik.handleChange}
                      error={
                        formik?.touched.old_password &&
                        formik.errors.old_password &&
                        formik.errors.old_password
                      }
                      {...inputStyles}
                    />
                    {showPassword.oldPassword === false && (
                      <button
                        type="button"
                        className="btn border-0 p-0 position-absolute m-auto eye-off"
                        onClick={() =>
                          setShowPassword({
                            oldPassword: showPassword.oldPassword
                              ? false
                              : true,
                            newPassword: false,
                            confirmPassword: false,
                          })
                        }
                      >
                        <i className="fa-solid fa-eye-slash"></i>
                      </button>
                    )}

                    {showPassword.oldPassword === true && (
                      <button
                        type="button"
                        className="btn border-0 p-0 position-absolute m-auto eye-on"
                        onClick={() =>
                          setShowPassword({
                            oldPassword: showPassword.oldPassword
                              ? false
                              : true,
                            newPassword: false,
                            confirmPassword: false,
                          })
                        }
                      >
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    )}
                  </div>

                  <div className="col-md-12 col-lg-6 position-relative">
                    <InputField
                      type={showPassword.newPassword ? "text" : "password"}
                      name="new_password"
                      placeholder="Enter new password"
                      label="New Password"
                      required={true}
                      value={formik.values.new_password}
                      onChange={formik.handleChange}
                      error={
                        formik?.touched.new_password &&
                        formik.errors.new_password &&
                        formik.errors.new_password
                      }
                      {...inputStyles}
                    />
                    {showPassword.newPassword === false && (
                      <button
                        type="button"
                        className="btn border-0 p-0 position-absolute m-auto eye-off"
                        onClick={() =>
                          setShowPassword({
                            newPassword: showPassword.newPassword
                              ? false
                              : true,
                            confirmPassword: false,
                            oldPassword: false,
                          })
                        }
                      >
                        <i className="fa-solid fa-eye-slash"></i>
                      </button>
                    )}

                    {showPassword.newPassword === true && (
                      <button
                        type="button"
                        className="btn border-0 p-0 position-absolute m-auto eye-on"
                        onClick={() =>
                          setShowPassword({
                            newPassword: showPassword.newPassword
                              ? false
                              : true,
                            confirmPassword: false,
                            oldPassword: false,
                          })
                        }
                      >
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    )}
                  </div>

                  <div className="col-md-12 col-lg-6 position-relative">
                    <InputField
                      type={showPassword.confirmPassword ? "text" : "password"}
                      name="confirm_password"
                      placeholder="Enter confirm password"
                      label="Confirm Password"
                      required={true}
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      error={
                        formik?.touched.confirm_password &&
                        formik.errors.confirm_password &&
                        formik.errors.confirm_password
                      }
                      {...inputStyles}
                    />
                    {showPassword.confirmPassword === false && (
                      <button
                        type="button"
                        className="btn border-0 p-0 position-absolute m-auto eye-off"
                        onClick={() =>
                          setShowPassword({
                            confirmPassword: showPassword.confirmPassword
                              ? false
                              : true,
                            oldPassword: false,
                            newPassword: false,
                          })
                        }
                      >
                        <i className="fa-solid fa-eye-slash"></i>
                      </button>
                    )}

                    {showPassword.confirmPassword === true && (
                      <button
                        type="button"
                        className="btn border-0 p-0 position-absolute m-auto eye-on"
                        onClick={() =>
                          setShowPassword({
                            confirmPassword: showPassword.confirmPassword
                              ? false
                              : true,
                            oldPassword: false,
                            newPassword: false,
                          })
                        }
                      >
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    )}
                  </div>
                  {alert && <Alert alerts={alert} />}
                  <Button
                    type="submit"
                    className="text-white rounded fs-6 me-2 mt-4 py-2 px-6"
                  >
                    {loading ? (
                      <PulseLoader color="#fff" size={10} />
                    ) : (
                      "Update"
                    )}
                  </Button>
                  {/* <LinkButton path="/community" name="Cancel" className="border border-dark text-dark fs-6 rounded text-decoration-none mx-2 mt-4 py-2 px-6" /> */}
                </form>
              </div>
            </div>
          </div>
        </AccountWrapper>
      </PrivateLayout>
    </>
  );
};
export default ChangePassword;

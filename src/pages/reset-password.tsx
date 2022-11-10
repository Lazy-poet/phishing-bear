import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { authServices } from '../../services'
import { PublicLayout, Button, SEO, InputField, Alert } from '@components';

const ResetPassword = () => {
  const router = useRouter()
  const { token } = router.query

  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik<any>({
    initialValues: {
      access_token: token,
      new_password: '',
      confirm_password: '',
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      new_password: Yup.string().required('New password is required').matches(
        /^(?=.*)(?=.{6,})/,
        'At least 6 characters long'
      ),
      confirm_password: Yup.string().required('Confirm password is required')
        .test('passwords-match', 'Passwords must match ', function (value) {
          return this.parent.new_password === value
        })
    }),

    onSubmit: (values: any) => {
      setLoading(true)
      authServices.updatePassword(values).then((data: any) => {
        setLoading(false)
        setAlert(data)
        setTimeout(() => {
          router.push('/login')
        }, 1000);
      })
    },
  })

  return (
    <>
      <SEO />
      <PublicLayout>
        <section className="login">
          <div className="container">
            <div className="row">

              <div className="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-5 mx-auto">

                <h3 className="text-center mb-4">Update Password</h3>
                <form onSubmit={formik.handleSubmit}>
                  <InputField
                    type={showPassword ? 'text' : 'password'}
                    name="new_password"
                    placeholder="Enter new password"
                    label={'New password'}
                    required={true}
                    value={formik.values.new_password}
                    onChange={formik.handleChange}
                    error={formik?.touched.new_password && formik.errors.new_password && formik.errors.new_password}
                  />
                  <div className="position-relative">
                    <InputField
                      type={showPassword ? 'text' : 'password'}
                      name="confirm_password"
                      placeholder="Enter confirm password"
                      label={'Confirm password'}
                      required={true}
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      error={formik?.touched.confirm_password && formik.errors.confirm_password && formik.errors.confirm_password}
                    />

                    {showPassword === false && <button type="button" className="btn border-0 p-0 position-absolute m-auto eye-off" onClick={() => setShowPassword(showPassword ? false : true)}>
                      <i className="fa-solid fa-eye-slash" ></i>
                    </button>}

                    {showPassword === true && <button type="button" className="btn border-0 p-0 position-absolute m-auto eye-on" onClick={() => setShowPassword(showPassword ? false : true)}>

                      <i className="fa-solid fa-eye" ></i>
                    </button>}
                  </div>
                  {alert && <Alert alerts={alert} />}
                  <div className="d-grid gap-2 mb-2">
                    <Button
                      type="submit"
                      name="Reset"
                      className="text-white fs-5 rounded-1"
                      loading={loading}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section >
      </PublicLayout>
    </>
  )
}
export default ResetPassword;

import React, { useState } from 'react'
import Link from 'next/link'

import * as Yup from 'yup'
import { useFormik } from 'formik'

import { authServices } from '../../services'
import { Button, InputField, Alert, SEO, PublicLayout } from '@components'

const ForgotPassword = () => {
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
    }),

    onSubmit: async (values: any) => {
      setLoading(true)
      authServices.forgotPassword(values).then((data: any) => {
        setLoading(false)
        setAlert(data)
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
              <div className="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-5 mx-auto mx-auto">
                <h3 className="text-center mb-4">Forgot Password</h3>
                <form onSubmit={formik.handleSubmit}>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    label="Email"
                    required={true}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik?.touched.email && formik.errors.email && formik.errors.email}
                  />

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
                <Link href="/login">
                  <a className="text-decoration-none fs-4">Back to login</a>
                </Link>
              </div>
            </div>
          </div>
        </section >
      </PublicLayout>
    </>
  )
}
export default ForgotPassword;

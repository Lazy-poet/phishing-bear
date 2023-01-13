import React, { useState } from 'react'
import Link from 'next/link'

import * as Yup from 'yup'
import { useFormik } from 'formik'

import { authServices } from '../../services'
import { Button, InputField, Alert, SEO, PublicLayout, StyledButton, StyledParagraphText } from '@components'
import { useCustomStyletron } from '../styles/custom-styles'
import { PulseLoader } from 'react-spinners'
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
  const [css, theme] = useCustomStyletron()
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
                    style={{ color: theme.colors.dark }}
                    inputStyles={{
                      height: '50px',
                      borderRadius: '10px',
                      background: '#FFF',
                      color: theme.colors.dark,
                      '::placeholder': {
                        color: 'rgba(0, 0, 0, .3)',
                        fontSize: '13px '
                      }
                    }}
                  />

                  {/* {alert && <Alert alerts={alert} />} */}

                  <div className="d-grid gap-2 mb-2">
                    <StyledButton overrides={{
                      background: theme.colors.secondary,
                      height: '50px',
                      margin: '10px 0',
                      borderRadius: '7px',
                      border: '.5px solid ' + theme.colors.dark,
                      ...theme.typography.font(14)
                    }}>{loading ? <PulseLoader color="#ffffff" size={10} /> : "Reset"}</StyledButton>
                  </div>
                </form>
                <Link href="/login">
                  <StyledParagraphText color={'#5a74ff'} size="16px" style={{ cursor: 'pointer' }} weight={800}>Back to login</StyledParagraphText>
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

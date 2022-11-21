import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { authServices } from '../../services';
import { setToken } from '../../redux/slices/session.slice';
import { FetchDataProps } from '../utils/type';
import { Button, InputField, Alert, SEO, PublicLayout, StyledHeaderText, StyledButton, StyledParagraphText, StyledDarkParagraphText } from '@components';
import { useCustomStyletron } from '../styles/custom-styles';
import { PulseLoader } from 'react-spinners'

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: 'neha.tiwari@piecodes.in',
      password: '1234567',
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required').matches(
        /^(?=.*)(?=.{6,})/,
        'At least 6 characters long'
      )
    }),
    onSubmit: async (values: { [key: string]: string; }, { resetForm }) => {
      setLoading(true)
      authServices.login(values).then((data: FetchDataProps | any) => {
        console.log('data is', data)
        dispatch(setToken(data?.access_token))
        setAlert(data)
        setLoading(false)
        if (data.error === false) {
          setTimeout(() => {
            data.error === false && router.push('/community')
            resetForm({ values: {} })
          }, 500)
        }
      })
    },
  })

  const [css, theme] = useCustomStyletron()
  return (
    <>
      <SEO />
      <PublicLayout>
        <section className="login-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-5 mx-auto">
                <StyledHeaderText overrides={{
                  ...theme.typography.font(38, 800),
                  color: theme.colors.dark,
                  textAlign: "center"
                }}>Log in</StyledHeaderText>
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

                  <div className="position-relative">
                    <InputField
                      type="password"
                      name="password"
                      placeholder="Password"
                      label="Password"
                      required={true}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik?.touched.password && formik.errors.password && formik.errors.password}
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
                  </div>
                  <Link href="/forgot-password">

                    <StyledDarkParagraphText weight={700} size="14px" align="right" style={{ cursor: 'pointer', marginBottom: '15px' }} onClick={() => { }}>
                      Forgot Password
                    </StyledDarkParagraphText>
                  </Link>

                  {/* {alert && <Alert alerts={alert} />} */}

                  <div className="d-grid gap-2 mb-2">
                    <StyledButton overrides={{
                      background: theme.colors.secondary,
                      height: '50px',
                      borderRadius: '7px',
                      border: '.5px solid ' + theme.colors.dark,
                      ...theme.typography.font(14)
                    }}>{loading ? <PulseLoader color="#ffffff" size={10} /> : "Log In"}
                    </StyledButton>
                  </div>
                </form>
                <ul className="nav justify-content-between">
                  <StyledParagraphText color={theme.colors.dark} size="14px" weight={500}>Don&lsquo;t have an account?</StyledParagraphText>
                  <Link href="/register">
                    <StyledParagraphText color={'#5a74ff'} size="14px" style={{ cursor: 'pointer' }} weight={800}>Sign Up</StyledParagraphText>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </section >
      </PublicLayout>
    </>
  )
}
export default Login;
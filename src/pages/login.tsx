import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { authServices } from '../../services';
import { setToken } from '../../redux/slices/session.slice';
import { FetchDataProps } from '../utils/type';
import { Button, InputField, Alert, SEO, PublicLayout } from '@components';

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

  return (
    <>
      <SEO />
      <PublicLayout>
        <section className="login-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-5 mx-auto">
                <h3 className="text-center mb-4">Login</h3>
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

                  <div className="position-relative">
                    <InputField
                      type={`${showPassword ? 'text' : 'password'}`}
                      name="password"
                      placeholder="Password"
                      label="Password"
                      required={true}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik?.touched.password && formik.errors.password && formik.errors.password}
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
                    <Button type="submit" name="Log in" className="text-white fs-5 rounded-1" loading={loading} />
                  </div>
                </form>
                <ul className="nav justify-content-between">
                  <Link href="/register">
                    <a className="text-decoration-none fs-4">Don&lsquo;t have an account?</a>
                  </Link>
                  <Link href="/forgot-password">
                    <a className="text-decoration-none fs-4">Forgot password</a>
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
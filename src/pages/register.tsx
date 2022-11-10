import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useFormik } from 'formik'
import * as Yup from 'yup';

import { authServices } from '../../services';
import { Button, InputField, Alert, SEO, CheckBox, PublicLayout } from '@components';

const SignIn = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState({
    data: {
      value: []
    }
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      email: Yup.string().required('Email is required').email('Invalid email format'),
      password: Yup.string().required('Password is required').matches(
        /^(?=.*)(?=.{6,})/,
        'Must Contain 6 Characters'
      ),
    }),

    onSubmit: (values: any, { resetForm }) => {
      setLoading(true)
      authServices.register(values).then((data: any) => {
        setAlert(data)
        if (data.error === false) {
          setTimeout(() => {
            setLoading(false)
            resetForm({ values: '' })
            router.push('/login')
          }, 2000);
        }
      })
    },
  })
  const handleValue = (e) => {
    const { value } = e.target
    const checkedValue = checked.data.value
    const find = checkedValue.findIndex(item => item === value)
    if (find > -1) {
      checkedValue.splice(find, 1)
    } else {
      checkedValue.push(value);
    }
    setChecked((e) => ({
      ...e,
      data: {
        ...e.data,
        value: checkedValue
      }
    }))
  }

  return (
    <><SEO />
      <PublicLayout>
        <section className="sign-up">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-5 mx-auto">
                <h3 className="text-center mb-4">Sign up</h3>
                <form className="my-2" onSubmit={formik.handleSubmit}>

                  <InputField
                    type="text"
                    name="first_name"
                    placeholder="e.g. Howard"
                    label="First Name"
                    required={true}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik?.touched.first_name && formik.errors.first_name && formik.errors.first_name}

                  />
                  <InputField
                    type="text"
                    name="last_name"
                    placeholder="e.g. Thresman"
                    label="Last Name"
                    required={true}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik?.touched.last_name && formik.errors.last_name && formik.errors.last_name}
                  />
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
                  <CheckBox
                    type="checkbox"
                    name="checkbox1"
                    onChange={(e) => handleValue(e)}
                    checkBoxOptions={[
                      { label: "By creating an account, I agree to this website's privacy policy and terms of service", value: 'checked' },
                    ]}
                  />
                  <CheckBox
                    type="checkbox"
                    name="checkbox2"
                    onChange={(e) => handleValue(e)}
                    checkBoxOptions={[
                      { label: ' I consent to receive marketing emails.', value: 'checked1' },
                    ]}
                  />
                  {alert && <Alert alerts={alert} />}
                  <div className="d-grid gap-2 mb-2">
                    <Button type="submit" name={"Let's get started!"} className={checked?.data?.value?.length > 1 ? 'text-white fs-5 rounded-1' : 'text-white disabled fs-5 rounded-1'}
                      loading={loading}
                    />
                  </div>

                </form>
                <ul className="nav justify-content-between">
                  <label className="fs-4">Already have an account?</label>
                  <Link href="/login">
                    <a className="text-decoration-none fs-4">Log In</a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </PublicLayout>
    </>
  )
}

export default SignIn

import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useFormik } from 'formik'
import * as Yup from 'yup';

import { authServices } from '../../services';
import { Button, InputField, Alert, SEO, StyledCheckbox, PublicLayout, StyledHeaderText, StyledButton, StyledParagraphText } from '@components';
import { useCustomStyletron } from '../styles/custom-styles';
import { PulseLoader } from 'react-spinners'

const SignIn = () => {
  const [css, theme] = useCustomStyletron()
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
                <StyledHeaderText overrides={{
                  ...theme.typography.font(38, 800),
                  color: theme.colors.dark,
                  textAlign: "center"
                }}>Sign Up</StyledHeaderText>
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
                  <InputField
                    type="text"
                    name="last_name"
                    placeholder="e.g. Thresman"
                    label="Last Name"
                    required={true}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik?.touched.last_name && formik.errors.last_name && formik.errors.last_name}
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
                      type={`${showPassword ? 'text' : 'password'}`}
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
                  <StyledCheckbox
                    name="checkbox1"
                    onChange={(e) => handleValue(e)}
                    label="By creating an account, I agree to this website's privacy policy and terms of service"
                    checked={true}
                  />
                  <StyledCheckbox
                    name="checkbox2"
                    onChange={(e) => handleValue(e)}
                    label=' I consent to receive marketing emails.'
                    checked={true}
                  />
                  {alert && <Alert alerts={alert} />}
                  <div className="d-grid gap-2 mb-2">
                    <StyledButton disabled={checked?.data?.value?.length < 2} overrides={{
                      background: theme.colors.secondary,
                      height: '50px',
                      borderRadius: '7px',
                      border: '.5px solid ' + theme.colors.dark,
                      ...theme.typography.font(14)
                    }}>{loading ? <PulseLoader color="#ffffff" size={10} /> : "Let's get started!"}</StyledButton>
                  </div>
                </form>
                <ul className="nav justify-content-between">
                  <StyledParagraphText color={theme.colors.dark} size="14px" weight={500}>Already have an account?</StyledParagraphText>
                  <Link href="/login">
                    <StyledParagraphText color={'#5a74ff'} size="14px" style={{ cursor: 'pointer' }} weight={800}>Log In</StyledParagraphText>

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

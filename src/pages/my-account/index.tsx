import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';

import { useFormik } from 'formik';

import { userServices, authServices } from '../../../services'
import { setLogOut } from '../../../redux/slices/session.slice';
import { Button, InputField, PrivateLayout, LinkButton, SEO, Alert, Loading } from '@components'
import { TextArea } from '../../components/form-inputs'

const NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [initialData, setInitialData] = useState<any>('')

  const logOut = () => {
    dispatch(setLogOut())
    router.push('http://newsite.phishingbear.com/login')
  }

  useEffect(() => {
    setInitialData({
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      company: '',
      designation: '',
      bio: '',
    })
    setLoading(true)
    authServices.getMe().then((data) => {
      setInitialData(data.data)
      setLoading(false)
    })
  }, [])

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    onSubmit(values) {
      const item = {
        first_name: values.first_name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        company: values.company,
        designation: values.designation,
        bio: values.bio,
      }
      setLoading(true)
      userServices.updateUserProfile(item).then(({data}) => {
        setAlert(data)
        if (data.error === false) {
          setLoading(false)
          setTimeout(() => {
            router.push('/community')
          }, 1000)
        }
      })
    },
  })

  return (
    <>
      <SEO />
      <PrivateLayout>
        <section className="my-account">
          <div className="container shadow rounded-1">
            <div className="row">
              <div className="col-3 sidebar border-end border-dark pt-5 px-0">
                <h4 className="ms-3 ps-1">My Account</h4>
                <ul className="nav flex-column">
                  <li className="nav-items">
                    <Link href="/my-account">
                      <a className="btn nav-link text-start rounded-0 text-dark ps-3 border-0"><i className="fa-solid fa-house me-2"></i> Account</a></Link>
                  </li>

                  <li className="nav-items">
                    <Link href="/my-account/change-password">
                      <a className="btn nav-link text-start rounded-0 text-dark ps-3  border-0">
                        <i className="fa-solid fa-key me-3"></i>Password
                      </a>
                    </Link>
                  </li>

                  <li className="nav-items">
                    <Link href="/my-account/friends">
                      <a className="btn nav-link text-start rounded-0 text-dark ps-3  border-0">
                        <i className="fa-solid fa-user me-3"></i> Friends
                      </a>
                    </Link>
                  </li>

                  <li className="nav-items">
                    <Button className="btn nav-link text-start rounded-0 text-dark border-0 ps-3 w-100 bg-white" name="Logout" onClick={logOut}>
                      <i className="fa-solid fa-right-from-bracket me-3"></i>
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="col-9 p-5">
                {loading ? <Loading /> :
                  <form onSubmit={formik.handleSubmit} className="my-4">
                    <div className="row">
                      <div className="col-6">
                        <InputField
                          type="text"
                          name="first_name"
                          label="First Name"
                          required={true}
                          value={formik.values.first_name}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="col-6">
                        <InputField
                          type="text"
                          name="last_name"
                          label="Last Name"
                          required={true}
                          value={formik.values.last_name}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="col-6">
                        <InputField
                          type="email"
                          name="email"
                          label="Email Address"
                          disabled={true}
                          value={formik.values.email}
                          onChange={formik.handleChange}

                        />
                      </div>

                      <div className="col-6">
                        <InputField
                          type="text"
                          name="phone_number"
                          placeholder="Enter your phone_number"
                          label="Mobile Number"
                          required={true}
                          value={formik.values.phone_number}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="col-6">
                        <InputField
                          type="text"
                          name="company"
                          placeholder="Enter your company"
                          label="Company"
                          required={true}
                          value={formik.values.company}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="col-6">
                        <InputField
                          type="text"
                          name="designation"
                          placeholder="Enter your designation"
                          label="Designation"
                          required={true}
                          value={formik.values.designation}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <TextArea
                          name="text"
                          value={formik.values.bio}
                          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero enim error similique quia numquam
                           ullam corporis officia odio repellendus aperiam consequatur laudantium porto voluptatibus, itaque
                           laboriosam veritatis voluptatum distinctio!"
                          label="Bio"
                          row="4"
                        />
                      </div>
                    </div>
                    {alert && <Alert alerts={alert} />}
                    <Button type="submit" name="Update" className="text-white rounded-1 fs-5 me-2" loading={loading} />
                    <LinkButton path="/community" name="Cancel" className="border border-dark text-dark fs-5 rounded-1 text-decoration-none mx-2" />
                  </form>
                }

              </div>
            </div>
          </div>
        </section>
      </PrivateLayout>
    </>
  )
}
export default NextPage;

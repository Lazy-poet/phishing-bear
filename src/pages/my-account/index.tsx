import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';

import { useFormik } from 'formik';

import { userServices, authServices } from '../../../services'
import { Button, InputField, PrivateLayout, LinkButton, SEO, Alert, Loading, AccountLinks, AccountWrapper } from '@components'
import { TextArea } from '../../components/form-inputs'
import { useCustomStyletron } from '../../styles/custom-styles';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [alert, setAlert] = useState(null)
  const [initialData, setInitialData] = useState<any>('')

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
      if (!data.error) {
        setInitialData(data.data)
      }
      setLoading(false)
    })
  }, [])

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    async onSubmit(values) {
      const item = {
        first_name: values.first_name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        company: values.company,
        designation: values.designation,
        bio: values.bio,
      }
      setUpdating(true)
      const { error } = await authServices.updateUserProfile(item);
      if (!error) {
        toast.info('Updated successfully')
      }
      setUpdating(false)
    },
  })

  const [css, theme] = useCustomStyletron()

  const inputStyles = {
    className: css({
      color: theme.colors.dark

    }),
    inputStyles: {
      backgroundColor: theme.colors.bg,
      border: `1px solid rgba(0, 0, 0, .3) !important`,
      borderRadius: '5px',
      color: theme.colors.dark
    }
  }
  return (
    <>
      <SEO />
      <PrivateLayout>
        <AccountWrapper>
          <div className="container shadow rounded-1 bg-white">
            <div className="row">
              <AccountLinks />
              <div className="col-12 col-sm-9 p-3 p-sm-5">
                {loading ? <Loading /> :
                  <form onSubmit={formik.handleSubmit} className="my-4">
                    <div className="row">
                      <div className="col-md-6 col-12 ">
                        <InputField
                          type="text"
                          name="first_name"
                          label="First Name"
                          required={true}
                          value={formik.values.first_name}
                          onChange={formik.handleChange}
                          {...inputStyles}

                        />
                      </div>

                      <div className="col-md-6 col-12">
                        <InputField
                          {...inputStyles}
                          type="text"
                          name="last_name"
                          label="Last Name"
                          required={true}
                          value={formik.values.last_name}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="col-md-6 col-12">
                        <InputField
                          {...inputStyles}
                          type="email"
                          name="email"
                          label="Email Address"
                          disabled={true}
                          value={formik.values.email}
                          onChange={formik.handleChange}

                        />
                      </div>

                      <div className="col-md-6 col-12">
                        <InputField
                          {...inputStyles}
                          type="text"
                          name="phone_number"
                          placeholder="Enter your phone_number"
                          label="Mobile Number"
                          required={true}
                          value={formik.values.phone_number}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="col-md-6 col-12">
                        <InputField
                          {...inputStyles}
                          type="text"
                          name="company"
                          placeholder="Enter your company"
                          label="Company"
                          required={true}
                          value={formik.values.company}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="col-md-6 col-12">
                        <InputField
                          {...inputStyles}
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
                    <Button type="submit" className="text-white rounded fs-6 me-2 mt-4 py-2 px-6" loading={loading}>{updating ? <PulseLoader color="#fff" size={10} /> : "Update"}</Button>

                    {/* <LinkButton path="/community" name="Cancel" className="border border-dark text-dark fs-6 rounded text-decoration-none mx-2 mt-4 py-2 px-6" /> */}
                  </form>
                }

              </div>
            </div>
          </div>
        </AccountWrapper>
      </PrivateLayout>
    </>
  )
}
export default NextPage;

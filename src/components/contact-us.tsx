import React from 'react';
import type { NextPage } from 'next'

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { TextArea } from '../components/form-inputs';
import { InputField, Button } from '@components'

const ContactUs: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      subject: Yup.string().required('Email is required'),

    }),
    onSubmit: async (values: any, { resetForm }) => {
      console.log('values', values);
      resetForm({ values: '' })
    },
  })

  return (
    <>
      <section className="contact-form py-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 bg-success text-center d-flex align-item-center">
              <img src="/assets/images/contact.png" alt="Contact Us" className="img-fluid w-75 m-auto" />
            </div>
            <div className="col-6 bg-primary">
              <form className="w-50 mx-auto py-5" onSubmit={formik.handleSubmit}>
                <h4 className="text-white fw-bolder pb-5">Drop us a line</h4>
                <InputField
                  type="text"
                  name="name"
                  placeholder="Enter Your name"
                  label="Name"
                  className="bg-transparent border-0 border-bottom rounded-0 shadow-none mb-5 fs-3 font-roboto"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik?.touched.name && formik.errors.name && formik.errors.name}
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                  className="bg-transparent border-0 border-bottom rounded-0 shadow-none mb-5 fs-3 font-roboto"
                  label="E-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik?.touched.email && formik.errors.email && formik.errors.email}
                />
                <InputField
                  type="text"
                  name="subject"
                  placeholder="What you wanna talk about?"
                  label="Subject"
                  className="bg-transparent border-0 border-bottom rounded-0 shadow-none mb-5 fs-3 font-roboto"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  error={formik?.touched.subject && formik.errors.subject && formik.errors.subject}
                />
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Starting Writing..."
                  className="bg-transparent shadow-none mb-5 fs-3 font-roboto"
                  label="Message"
                  row="4"
                  cols="4"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                <Button type="submit" className="bg-warning btn-pill fs-2" name="Send" />
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default ContactUs;

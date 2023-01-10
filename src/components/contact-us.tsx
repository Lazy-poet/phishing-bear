import React from 'react';
import type { NextPage } from 'next'

import * as Yup from 'yup';
import { useFormik } from 'formik';


import { InputField, Button, SectionWrapper, ImageWrapper, StyledParagraphText, StyledTextArea, addSpace, StyledButton } from '@components'
import { useCustomStyletron } from '../styles/custom-styles';

const ContactUs: NextPage = () => {
  const [css, theme] = useCustomStyletron()
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
      subject: Yup.string().required('Subject is required'),

    }),
    onSubmit: async (values: any, { resetForm }) => {
      console.log('values', values);
      resetForm({ values: '' })
    },
  })

  return (
    <>
      <SectionWrapper overrides={{ padding: '0 !important', gap: '0 !important', background: theme.colors.bgHover }}>

        <ImageWrapper className={css({
          display: 'grid',
          placeItems: 'center',
          width: 'fit-content',
          paddingTop: '50px',

          [theme.mediaQuery.xsmall]: {
            background: theme.colors.bgHover
          },
          [theme.mediaQuery.medium]: {
            paddingTop: '100px',
          }
        })}>
          <img src="/assets/images/contact.png" alt="Contact Us" className={css({ width: '75%', margin: 'auto', maxWidth: '100%', height: 'auto' })} />
        </ImageWrapper>
        <div className={css({
          flex: '0 0 50%',
          background: theme.colors.secondary,
          padding: '50px 20px 20px',
          [theme.mediaQuery.xsmall]: {
            padding: '150px 50px 50px',
          },
          width: '100%'
        })}>

          <form onSubmit={formik.handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            <StyledParagraphText overrides={{ ...theme.typography.font(26, 700) }}>Drop us a line</StyledParagraphText>
            <InputField
              type="text"
              name="name"
              placeholder="Enter Your name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik?.touched.name && formik.errors.name && formik.errors.name}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Your e-mail"
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
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik?.touched.subject && formik.errors.subject && formik.errors.subject}
            />
            <div className={css({
              textTransform: "capitalize",
              margin: '10px 0',
              color: '#fff',
              ...theme.typography.font(16, 400)
            })}>
              <label htmlFor='message'>Message</label>
              {addSpace('vert', '20px')}
              <StyledTextArea
                id="message"
                name="message"
                placeholder="Starting Writing..."
                className="bg-transparent text-white shadow-none mb-5 fs-3 font-roboto"
                // label="Message"
                rows={4}
                cols={4}
                value={formik.values.message}
                onChange={formik.handleChange}
              />
            </div>
            <StyledButton top="20px" small overrides={{
              background: theme.colors.primary,
              color: theme.colors.dark,
              borderRadius: '5px',
              height: '40px',
              width: '100%',
              padding: '0 50px',
              transition: 'all .3s ease',
              ...theme.typography.font(16, 700),
              ':hover': {
                color: theme.colors.secondary,
                background: '#fff',
              },
              [theme.mediaQuery.xsmall]: {
                height: '60px',
                width: 'fit-content',

              }
            }}>
              Send
            </StyledButton>
          </form>
        </div>
        <img
          style={{
            position: 'absolute',
            top: -10,
            left: 0,
            width: '100%',
            height: 'auto',
            zIndex: 1,
            objectFit: 'cover'
          }}
          src='/assets/images/curve.svg'
        />
      </SectionWrapper>

    </>
  )
}
export default ContactUs;

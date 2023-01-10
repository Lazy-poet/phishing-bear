import { SectionWrapper } from '@components';
import React from 'react'
import ContactUs from '../components/contact-us';
import PublicLayout from '../components/private-layout';

const Contact = () => {
  return (
    <PublicLayout>
      <div style={{
        width: '100%',
        padding: '40px 0 0'
      }}>
        <ContactUs />
      </div>
    </PublicLayout>
  )
}
export default Contact;
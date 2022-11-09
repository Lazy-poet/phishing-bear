import React from 'react';

import { Header, Footer } from '@components'

const PublicLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default PublicLayout;

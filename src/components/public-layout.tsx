import React from 'react';

import { Header, Footer } from '@components'

const PublicLayout = ({ children }: any) => {
  return (
    <>
      <div style={{
        scrollSnapType: "y mandatory",
        scrollPaddingTop: '60px',
        overflowY: "scroll",
        minHeight: "100vh",
        height: "calc(var(--vh, 1vh) * 100)",
      }}>
        <Header />
        {children}
      <Footer />
      </div>
    </>
  )
}
export default PublicLayout;

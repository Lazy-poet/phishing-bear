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
        <main style={{marginTop: '45px'}}>{children}</main>
      <Footer />
      </div>
    </>
  )
}
export default PublicLayout;

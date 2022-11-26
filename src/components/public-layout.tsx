import React from 'react';

import { Header, Footer } from '@components'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


const PublicLayout = ({ children, strict, noHeader, noFooter }: { children: React.ReactNode, strict?: boolean, noHeader?: boolean, noFooter?: boolean }) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth)
  const router = useRouter()

  if (isLoggedIn && strict) {
    router.push('/');
    return
  }
  return (
    <>
      <div style={{
        scrollSnapType: "y mandatory",
        ...(!noHeader && { scrollPaddingTop: '60px' }),
        overflowY: "scroll",
        minHeight: "100vh",
        height: "calc(var(--vh, 1vh) * 100)",
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between'
      }}>
        {!noHeader && <Header />}
        <main style={{ marginTop: noHeader ? 0 : '45px' }}>{children}</main>
        {!noFooter && <Footer />}
      </div>
    </>
  )
}
export default PublicLayout;

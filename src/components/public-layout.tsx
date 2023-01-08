import React from 'react';

import { Header, Footer } from '@components'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useCustomStyletron } from '../styles/custom-styles';


const PublicLayout = ({ children, strict, noHeader, noFooter }: { children: React.ReactNode, strict?: boolean, noHeader?: boolean, noFooter?: boolean }) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth)
  const router = useRouter()
  const [css, theme] = useCustomStyletron()

  if (isLoggedIn && strict) {
    router.push('/');
    return
  }
  return (
    <>
      <div id="container-ref" className={css({
        overflowY: "scroll",
        minHeight: "100vh",
        height: "calc(var(--vh, 1vh) * 100)",
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        background: '#F8F8F8',
      })}>

        {!noHeader && <Header />}
        <main
          data-scroll-section
          data-scroll-speed='-1'
        >{children}</main>
        {!noFooter && <Footer />}
      </div>
    </>
  )
}
export default PublicLayout;

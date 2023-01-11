import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Header, Footer } from '@components'
import Login from '../pages/login';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useCustomStyletron } from '../styles/custom-styles';

const PrivateLayout = ({ children, noHeader, noFooter }: { children: React.ReactNode, noHeader?: boolean, noFooter?: boolean }) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const router = useRouter();
  const [css, theme] = useCustomStyletron()
  useEffect(() => {
    if (!isLoggedIn) {
      toast.info('You have to login first', { toastId: 'login-again' });
    }
  }, []);


  if (!isLoggedIn && router.isReady) {
    router.push(`/login?redirect_path=${router.pathname}`);
    return
  }

  return (
    <>
      <div className={css({
        overflowY: "scroll",
        minHeight: "100vh",
        height: "calc(var(--vh, 1vh) * 100)",
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        background: '#fff',

      })}>
        {!noHeader && <Header isPrivate />}
        <main
          data-scroll-section
        >{children}</main>
        {!noFooter && <Footer />}
      </div>
    </>
  )
}
export default PrivateLayout;

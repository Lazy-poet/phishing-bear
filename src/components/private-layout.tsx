import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Header, Footer } from '@components'
import Login from '../pages/login';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const PrivateLayout = ({ children }: any) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.info('You have to login first');
    }
  }, [])
  if (!isLoggedIn && router.isReady) {
    router.push(`login?redirect_path=${router.pathname}`);
    return
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default PrivateLayout;

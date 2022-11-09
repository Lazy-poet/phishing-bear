import React from 'react';
import { useSelector } from 'react-redux';

import { Header, Footer } from '@components'
import Login from '../pages/login';

const PrivateLayout = ({ children }: any) => {
  const { isLoggedIn } = useSelector((state: any) => state.session)
  return (
    <>
      {isLoggedIn === true ?
        <>
          <Header />
          {children}
          <Footer />
        </>
        :
        <Login />}
    </>
  )
}
export default PrivateLayout;

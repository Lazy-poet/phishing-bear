import React, { useState } from 'react'
import '../styles/app.scss'
import PropTypes from 'prop-types'

import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from '../styletron';
import { BaseProvider } from "baseui";
import { theme, CustomTheme } from "../theme";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from '../context/authContext'
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { ...pageProps } }: any) {
  const [state, setState] = useState(false)

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
    // require('@fortawesome/fontawesome-free/js/all.js')
    setState(true)
  }, []);
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={theme as CustomTheme}>
        <Provider store={store}>
          <ToastContainer autoClose={2000} limit={1} />
          <AuthProvider>
            {state ?
              <Component {...pageProps} />
              : null}
          </AuthProvider>
        </Provider>
      </BaseProvider>
    </StyletronProvider>
  )
}
MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({}),
}

export default MyApp

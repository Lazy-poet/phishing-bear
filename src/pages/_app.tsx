import React, { useState } from 'react'
import '../styles/app.scss'
import PropTypes from 'prop-types'

import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'

function MyApp({ Component, pageProps: { ...pageProps } }: any) {
  const [state, setState] = useState(false)

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
    require('@fortawesome/fontawesome-free/js/all.js')
    setState(true)
  }, []);

  return (
    <>
      <Provider store={store}>
        {state ?
          <Component {...pageProps} />
          : null}
      </Provider>
    </>
  )
}
MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({}),
}

export default MyApp

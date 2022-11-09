import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { authServices } from '../../services'
import { Alert, SEO } from '@components';

const userAccountVerify = () => {
  const router = useRouter()

  // eslint-disable-next-line no-unsafe-optional-chaining
  const { token } = router?.query
  console.log('token', token);

  const [alert, setAlert] = useState(null)
  useEffect(() => {
    authServices.accountVerify(token).then((data) => {
      setAlert(data)
    })
  }, [token])

  return (
    <>
      <SEO />
      <div className="row align-item-center">
        <h6>Verify Email</h6>
        {alert && <Alert alerts={alert} />}
      </div>
    </>
  )
}
export default userAccountVerify
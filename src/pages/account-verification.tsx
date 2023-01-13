import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

import { authServices } from '../../services'
import { Alert, SEO, StyledButton, StyledDarkParagraphText, Spinner, PublicLayout } from '@components';
import { useCustomStyletron } from '../styles/custom-styles';
import Link from 'next/link';
import { toast } from 'react-toastify';


const userAccountVerify = () => {
  const { push, query, isReady } = useRouter()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { token } = query;
  const requestSent = useRef(false)
  useEffect(() => {
    if (requestSent.current) return;
    if (isReady && !token) {
      setLoading(false)
      toast.error('token not found')
      push('/login');
      return
    }
    if (token) {
      (async () => {
        requestSent.current = true;
        const res = await authServices.accountVerify(token as string);
        if (!res) {
          setError(true)
          push('/');

        }
        setLoading(false)
      })()
    }

  }, [isReady, token])

  const [css, theme] = useCustomStyletron()
  return (
    <PublicLayout strict noHeader noFooter>
      <SEO />
      <div className={css({
        width: '100vw',
        height: '100vh',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column',
        gap: '20px',
        scrollSnapAlign: "start",

      })}>
        {loading ? <Spinner /> : error ? null : <>
          <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3093 34.6488L31.2026 41.5421L42.6914 25.4578" stroke="#009E52" stroke-width="3.72796" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="33.5" cy="33.5" r="31.636" stroke="#009E52" stroke-width="3.72796" />
          </svg>
          <h6>Account Verified</h6>
          <StyledDarkParagraphText size="14px" overrides={{ width: '300px', textAlign: 'center' }}>Congratulations, your account has been verified successfully. You can now proceed to login</StyledDarkParagraphText>
          <Link href="/login"><StyledButton small overrides={{ background: theme.colors.secondary, color: '#fff' }}>Go to login</StyledButton></Link>
        </>}
      </div>
    </PublicLayout>
  )
}
export default userAccountVerify
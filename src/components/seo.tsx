import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

const SEO = ({ title }: any) => {
  const metaTitle = title?.title ? `${title?.title} | Phishing Bear` : 'Phishing Bear'
  const router = useRouter()

  return (
    <Head>
      {router?.pathname === '/' && <title>{metaTitle}</title>}
      {router?.pathname === '/login' && <title>{metaTitle} - Login</title>}
      {router?.pathname === '/forgot-password' && <title>{metaTitle} - Forgot-Password</title>}
      {router?.pathname === '/register' && <title>{metaTitle} - Register</title>}
      {router?.pathname === '/reset-password' && <title>{metaTitle} - Reset-Password</title>}
      {router?.pathname === '/account-verification' && <title>{metaTitle} - Account-Verification</title>}
      {router?.pathname === '/community' && <title>{metaTitle} - Community</title>}
      {router?.pathname === '/about' && <title>{metaTitle} - About</title>}
      {router?.pathname === '/pricing' && <title>{metaTitle} - Pricing</title>}
      {router?.pathname === '/dashboard' && <title>{metaTitle} - Dashboard</title>}
      {router?.pathname === '/faq' && <title>{metaTitle} - FAQ</title>}
      {router?.pathname === '/private' && <title>{metaTitle} - Private</title>}
      {router?.pathname === '/my-account' && <title>{metaTitle} - My-Account</title>}
      {router?.pathname === '/my-account/friends' && <title>{metaTitle} - My-Account-Friends</title>}
      {router?.pathname === '/my-account/change-password' && <title>{metaTitle} - My-Account-ChangePassword</title>}
    </Head>
  )
}
export default SEO
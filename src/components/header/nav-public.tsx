import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router';

import { LinkButton } from '../form-inputs';
import { NavItem, HeaderWrapper } from './header.style'
import LocaleSelector from './localeSelector';
import { useCustomStyletron } from '../../styles/custom-styles'
const NavPublic = () => {
  const router = useRouter()
  const [css, theme] = useCustomStyletron()
  return (
    <HeaderWrapper>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifySelf: 'flex-end', height: '100%' }}>
        <Link href="/home">
          <img src="/assets/images/logo.svg" alt="Logo" className={css({
            width: '170px',
            marginRight: '50px',
            cursor: 'pointer',
            ':hover': {
              transform: 'scale(1.01)'
            }
          })} />
        </Link>
        <NavItem href="/about" label="About us" />
        <NavItem href="/pricing" label="Pricing" />
        <NavItem href="/platform" label="User Platform" logo="/assets/images/user-platform.svg" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifySelf: 'flex-end', height: '100%' }}>
        <LocaleSelector />
        <NavItem href="#" label="Try it for free" style={{
          borderRadius: '5px',
          background: theme.colors.secondary,
          color: '#fff',
          opacity: 1,
          margin: '10px',
          height: '80%',
          ':hover': {
            opacity: .8
          }
        }} />

        {router?.pathname === '/login' ? null :
          <NavItem href="/login" label="Log in" style={{
            borderRadius: '5px',
            // color: theme.colors.secondary,
            border: `1px solid ${theme.colors.dark}`,
            width: '100px',
            background: 'transparent',
            opacity: 1,
            margin: '10px',
          height: '80%',

            ':hover': {
              opacity: .8
            }
          }}  />
        }

      </div>
    </HeaderWrapper >

  )
}
export default NavPublic;
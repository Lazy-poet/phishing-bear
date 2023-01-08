import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux'
import { toggleLogoutModal } from '../../../redux/slices/auth.slice'
import { NavItem, DesktopHeaderWrapper, MobileHeaderWrapper } from './header.style'
import LocaleSelector from './localeSelector';
import { useCustomStyletron } from '../../styles/custom-styles'
import Sidebar from '../sidebar/sidebar'

type Props = {
  showSidebar: boolean
  toggleSidebar: () => void
}
export const links = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Enterprise solutions', href: '/enterprise' },
  { label: 'Private solutions', href: 'private' },
]
const NavPublic = ({ showSidebar, toggleSidebar }) => {
  const router = useRouter()
  const [css, theme] = useCustomStyletron();
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch()
  return (
    <>
      <DesktopHeaderWrapper>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifySelf: 'flex-end', height: '100%' }}>
          <Link href="/">
            <img src="/assets/images/logo.svg" alt="Logo" className={css({
              width: '170px',
              marginRight: '20px',
              [theme.mediaQuery.medium]: {
                marginRight: '50px',

              },
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
          <NavItem href="/pricing" label="Try it for free" wrapperStyle={{
            borderRadius: '25px',
            background: '#fff',
            color: theme.colors.dark,
            opacity: 1,
            margin: '10px',
            padding: '0 20px',
            height: '80%',
            ':hover': {
              opacity: .8
            }
          }} />

          {router?.pathname === '/login' ? null :
            <NavItem onClick={() => {
              if (isLoggedIn) {
                dispatch(toggleLogoutModal(true))
              }
            }} href={isLoggedIn ? "" : "/login"} label={`Log ${isLoggedIn ? "out" : "in"}`} wrapperStyle={{
              borderRadius: '25px',
              color: '#fff',
              border: `1px solid #fff`,
              width: '100px',
              background: 'transparent',
              opacity: 1,
              margin: '10px',
              height: '80%',

              ':hover': {
                opacity: .8
              }
            }} />
          }

        </div>
      </DesktopHeaderWrapper >
      <MobileHeaderWrapper>
        <Link href="/">
          <img src="/assets/images/logo.svg" alt="Logo" className={css({
            width: '120px',
            [theme.mediaQuery.xsmall]: {
              width: '150px',
            },
            marginRight: '50px',
            cursor: 'pointer',
            ':hover': {
              transform: 'scale(1.01)'
            }
          })} />
        </Link>
        <img src="/assets/images/hamburger-light.svg" alt="Logo" className={css({
          width: '40px',
          cursor: 'pointer',
          ':hover': {
            transform: 'scale(1.01)'
          }
        })}
          onClick={toggleSidebar}
        />
        <Sidebar links={links} show={showSidebar} toggle={toggleSidebar} onLogout={() => {
          if (isLoggedIn) {
            dispatch(toggleLogoutModal(true))
          }
        }} />

      </MobileHeaderWrapper>
    </>
  )
}
export default NavPublic;
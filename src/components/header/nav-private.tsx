import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import { authServices } from '../../../services'
import { setLogOut, setMedata } from '../../../redux/slices/auth.slice'
import { Button } from '@components'
import { useCustomStyletron } from '../../styles/custom-styles'
import { DesktopHeaderWrapper, NavItem, MyAccountWrapper, MobileHeaderWrapper } from './header.style'
import Sidebar from '../sidebar/sidebar'

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: '/assets/images/offcanvas-icons/dashboard.svg' },
  { label: 'Handbook', href: '/handbook', icon: '/assets/images/offcanvas-icons/handbook.svg' },
  { label: 'FAQs', href: '/faq', icon: '/assets/images/offcanvas-icons/faq.svg' },
  { label: 'My community', href: '/community', icon: '/assets/images/offcanvas-icons/community.svg' },
]
const NavPrivate = ({ showSidebar, toggleSidebar }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { isLoggedIn, profileData } = useSelector((state: any) => state.auth)
  const userName = `${profileData?.first_name}+${profileData?.last_name}`
  const matches = userName.match(/\b(\w)/g)
  const initials = matches?.join('').toUpperCase() || '';
  useEffect(() => {
    if (isLoggedIn === true) {
      authServices.getMe().then((data: any) => {
        if (data) {
          dispatch(setMedata(data.data));
        }
      })
    }
  }, [isLoggedIn])

  const logOut = () => {
    dispatch(setLogOut())
    router.push('/login');
  }


  const [css, theme] = useCustomStyletron()

  return (
    <>
      <DesktopHeaderWrapper style={{ ...(router.pathname !== '/' && { background: '#fff' }) }}>
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
          <NavItem href="/dashboard" label="Dashboard" logo='/assets/images/dashboard.svg' />
          <NavItem href="/handbook" label="Handbook" logo='/assets/images/handbook.svg' />
          <NavItem href="/faq" label="FAQs" logo="/assets/images/faq.svg" />
          <NavItem href="/community" label="Community" logo="/assets/images/community.svg" />
        </div>
        <MyAccountWrapper onLogout={logOut} initials={initials} />
      </DesktopHeaderWrapper>
      <MobileHeaderWrapper style={{ ...(router.pathname !== '/' && { background: '#fff' }) }}>
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
        <img src="/assets/images/hamburger.svg" alt="Logo" className={css({
          width: '40px',
          cursor: 'pointer',
          ':hover': {
            transform: 'scale(1.01)'
          }
        })}
          onClick={toggleSidebar}
        />
        <Sidebar initials={initials} onLogout={logOut} isLoggedIn links={NAV_ITEMS} show={showSidebar} toggle={toggleSidebar} />
      </MobileHeaderWrapper>
    </>

  )
}
export default NavPrivate;
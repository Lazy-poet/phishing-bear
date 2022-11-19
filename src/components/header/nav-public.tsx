import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router';

import { LinkButton } from '../form-inputs';
import { NavItem, DesktopHeaderWrapper, MobileHeaderWrapper } from './header.style'
import LocaleSelector from './localeSelector';
import { useCustomStyletron } from '../../styles/custom-styles'
import Sidebar from '../sidebar/sidebar'

type Props = {
  showSidebar: boolean
  toggleSidebar: () => void
}
const NavPublic = ({ showSidebar, toggleSidebar }) => {
  const router = useRouter()
  const [css, theme] = useCustomStyletron()
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
        <img src="/assets/images/hamburger.svg" alt="Logo" className={css({
          width: '40px',
          cursor: 'pointer',
          ':hover': {
            transform: 'scale(1.01)'
          }
        })}
          onClick={toggleSidebar}
        />
        <Sidebar show={showSidebar} toggle={toggleSidebar} />

      </MobileHeaderWrapper>
    </>
  )
}
export default NavPublic;
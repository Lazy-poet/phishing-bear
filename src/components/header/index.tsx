import React, { useState, useEffect } from 'react'
import NavPublic, { links } from './nav-public'
import NavPrivate from './nav-private'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useCustomStyletron } from '../../styles/custom-styles'
type Props = {
  isPrivate?: boolean
  headerTheme: 'light' | 'dark'
}

const Header = ({isPrivate, headerTheme}: Props) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth)

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(prevVal => !prevVal);
  const [hasScrolled, setHasScrolled] = useState(false)
  const [, theme] = useCustomStyletron()
  const { pathname } = useRouter();

  useEffect(() => {
    const container = document.getElementById('container-ref');
    const scrollListener = () => {
      setHasScrolled(container.scrollTop >= 60)
    }
    if (container) {

    }
    container?.addEventListener('scroll', scrollListener)

  })

  return (
    <div data-scroll-sticky style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: 'fit-content', zIndex: 10,

      ...(hasScrolled && {
        background: 'rgba(53, 186, 110, .2)',
        backdropFilter: 'blur(15px)'
      })
    }}>
      {isPrivate ? <NavPrivate showSidebar={showSidebar} toggleSidebar={toggleSidebar} headerTheme={headerTheme} /> : <NavPublic headerTheme={headerTheme} showSidebar={showSidebar} toggleSidebar={toggleSidebar} />}
    </div>
  )
}

export default Header
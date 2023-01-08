import React, { useState, useEffect } from 'react'
import NavPublic, { links } from './nav-public'
import NavPrivate from './nav-private'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { L } from 'chart.js/dist/chunks/helpers.core'
import { useCustomStyletron } from '../../styles/custom-styles'
type Props = {}

const Header = (props: Props) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth)

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(prevVal => !prevVal);
  const [hasScrolled, setHasScrolled] = useState(false)
  const [, theme] = useCustomStyletron()
  const { pathname } = useRouter();

  useEffect(() => {
    console.log('loaded');
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
      {isLoggedIn && !links.map(l => l.href).includes(pathname) ? <NavPrivate showSidebar={showSidebar} toggleSidebar={toggleSidebar} /> : <NavPublic showSidebar={showSidebar} toggleSidebar={toggleSidebar} />}
    </div>
  )
}

export default Header
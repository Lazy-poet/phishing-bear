import React, { useState } from 'react'
import NavPublic, { links } from './nav-public'
import NavPrivate from './nav-private'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { L } from 'chart.js/dist/chunks/helpers.core'
type Props = {}

const Header = (props: Props) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth)
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(prevVal => !prevVal);
  const { pathname } = useRouter();

  return (
    <div data-scroll-sticky style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: 'fit-content', zIndex: 10 }}>
      {isLoggedIn && !links.map(l => l.href).includes(pathname) ? <NavPrivate showSidebar={showSidebar} toggleSidebar={toggleSidebar} /> : <NavPublic showSidebar={showSidebar} toggleSidebar={toggleSidebar} />}
    </div>
  )
}

export default Header
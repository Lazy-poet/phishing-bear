import React, { useState } from 'react'
import NavPublic from './nav-public'
import NavPrivate from './nav-private'
import { useSelector } from 'react-redux'
type Props = {}

const Header = (props: Props) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth)
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(prevVal => !prevVal)
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: 'fit-content', zIndex: 10 }}>
      {isLoggedIn ? <NavPrivate /> : <NavPublic showSidebar={showSidebar} toggleSidebar={toggleSidebar} />}
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import NavPublic from './nav-public'
type Props = {}

const Header = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(prevVal => !prevVal)
  return (
    <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: 'fit-content', zIndex: 10}}>
      <NavPublic showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
    </div>
  )
}

export default Header
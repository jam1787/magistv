'use client'
import { useState } from 'react'
import NavMenu from './NavMenu'
import { navLinks } from '../../utils/navLinks'

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false)
  const handleClick = () => setMenuClick(!menuClick)

  const menuStyles = 'flex absolute -z-10 top-[-100vh] left-0 gap-12 flex-col justify-center items-center text-xl h-screen w-full font-semibold md:font-normal transition-all duration-300 md:flex-row md:static md:gap-6 md:text-base md:h-0 md:w-auto md:transition-none md:z-0'
  const menuActiveStyles = 'backdrop-blur-md bg-gradient-to-b from-[#0024d6] 80% to-[#010130ef] 100% top-[0] left-0'

  return (
    <header className='fixed top-0 left-0 z-20 w-full backdrop-blur-md'>
      <NavMenu
        menuStyles={menuStyles}
        menuActiveStyles={menuActiveStyles}
        menuClick={menuClick}
        setMenuClick={setMenuClick}
        handleClick={handleClick}
        navLinks={navLinks}
      />
    </header>
  )
}

export default Navbar
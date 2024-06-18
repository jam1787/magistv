'use client'
import { useState } from 'react';
import { navLinks } from '../utils/navLinks'
import Link from 'next/link'
import { IoCloseOutline, IoMenuOutline} from "react-icons/io5";
import LinkComponent from './LinkComponent';

const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false);
    const handleClick = () => setMenuClick(!menuClick);

    const menuStyles = 'flex absolute -z-10 top-[-100vh] left-0 gap-12 flex-col justify-center items-center text-xl h-screen w-full font-semibold md:font-normal transition-all duration-300 md:flex-row md:static md:gap-6 md:text-base md:h-0 md:w-auto md:transition-none md:z-0'
    const menuActiveStyles = 'backdrop-blur-md bg-[#637cff] top-[0] left-0'

  return (
    <header className='fixed top-0 left-0 z-20 w-full backdrop-blur-md'>
        <nav className="flex items-center justify-between text-white 2xl:container 2xl:m-auto px-5 lg:px-8 py-2 md:py-4">
            <Link href="/" className='w-32'>Logo</Link>
            <ul className={`${menuClick ? menuStyles + menuActiveStyles : menuStyles}`}>
                {navLinks.map(({name, route}, i) => 
                    <li key={i}>
                        <Link
                            href={route}
                            onClick={()=> setMenuClick(false)}
                        >
                            {name}
                        </Link>
                    </li>
                )}
                <li>
                    <LinkComponent route='create-account' text='Registrate' classStyle='py-2 px-5' />
                </li>
            </ul>
            <button className="md:hidden" onClick={handleClick}>
                {menuClick ? 
                    <IoCloseOutline className="text-3xl" />
                        :
                    <IoMenuOutline className="text-3xl"/>
                }
            </button>
        </nav>
    </header>
  )
}

export default Navbar
import { IoCloseOutline, IoMenuOutline} from "react-icons/io5"
import { HiOutlineUser } from "react-icons/hi";
import Link from 'next/link'
import LinkComponent from "../LinkComponent"

const NavMenu = ({
    menuStyles,
    menuActiveStyles,
    menuClick,
    setMenuClick,
    handleClick,
    navLinks
}) => {
  return (
    <nav className="flex items-center justify-between text-white 2xl:container 2xl:m-auto px-5 lg:px-8 py-2 md:py-4">
        <Link href="/" className='w-16'>
            <img src='/magis-tv.png' alt='Logo MagisTV' />
        </Link>
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
            <li onClick={()=> setMenuClick(false)} >
                <LinkComponent 
                    route='create-account'
                    text='Registrate' 
                    classStyle='py-2 px-5'
                />
            </li>
            <li onClick={()=> setMenuClick(false)}>
                <Link href='sign-in'>
                    <HiOutlineUser className="text-3xl p-0" />
                </Link>
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
  )
}

export default NavMenu
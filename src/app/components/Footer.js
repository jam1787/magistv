import Link from "next/link"
import { navLinks } from "../utils/navLinks"

const Footer = () => {
    return (
        <footer className="container flex flex-col items-center justify-between p-6 pt-10 mx-auto">
            <Link href="/">
                <img className="w-auto h-10 mb-4" src='/magis-tv.png' alt="" />
            </Link>
            <ul className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                {navLinks.map(({ name, route }, i) =>
                    <li key={i} className="text-sm text-white transition-colors duration-300 hover:text-blue-200">
                        <Link href={route}>
                            {name}
                        </Link>
                    </li>
                )}
            </ul>
        </footer>
    )
}

export default Footer
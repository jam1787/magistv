import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io5"

const WhatsAppButton = ({ route, classStyle, data, reference }) => {
  return (
    <Link
      ref={reference}
      className={`${classStyle} hover:opacity-90 transition-all`}
      href={route}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IoLogoWhatsapp />
      <span>{data}</span>
    </Link>
  )
}

export default WhatsAppButton
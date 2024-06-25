import Link from 'next/link'

const LinkComponent = ({ text, classStyle, route }) => {
  return (
    <Link
      href={`/${route}`}
      className={`font-normal bg-[#e7ebff] text-[#2245ff] rounded-full transtion hover:opacity-90 ${classStyle}`}
    >
      {text}
    </Link>
  )
}

export default LinkComponent
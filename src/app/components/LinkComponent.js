import Link from 'next/link'

const LinkComponent = ({text, classStyle, route}) => {
  return (
    <Link href={`/${route}`} className={`${classStyle} font-normal bg-[#e7ebff] text-[#2245ff] rounded-full`}>{text}</Link>
  )
}

export default LinkComponent
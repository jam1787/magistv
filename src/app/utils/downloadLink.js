import Link from 'next/link'

export const DownloadLink = ({ route, text, classN }) => {
    return (
        <Link
            href={route}
            className={classN}
            download
        >
            {text}
        </Link>
    )
}
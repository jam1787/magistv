import Link from 'next/link'

export const DownloadLink = ({ route, text, classN }) => {
    return (
        <Link
            href={route}
            className={classN}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </Link>
    )
}
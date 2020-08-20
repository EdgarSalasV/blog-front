import { useRouter } from 'next/router'
import Link from 'next/link'

const Link = ({ href='/', text='' }) => {
    const router = useRouter()
    const isCurrent = router.pathname === href
    return (
        <Link href={href}>
            <a style={{ color: 'black', textDecoration: 'none', fontWeight: isCurrent ? 'bold' : 'normal' }}>
            { text }
            </a>
        </Link>
    )
}

export default Link

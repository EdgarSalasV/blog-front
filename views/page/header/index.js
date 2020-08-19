import classes from './style.module.css'
import Nav from './nav'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const Logo = () => 
<Link href='/'>
    <a>
        <img src='/images/logo2.png' alt=""/>
    </a>
</Link>


const Header = () => {
    const headerRef = useRef()
    const [height, setHeight] = useState(0)
    useEffect(() => {
        const header = headerRef.current
        const { height } = window.getComputedStyle(header)
        setHeight(height)
    }, [])
    return (
        <>
        <div style={{marginTop: height}}></div>
        <header className={classes.header} ref={headerRef}>
            <Logo />
            <Nav />
        </header>
        </>
    )
}

export default Header
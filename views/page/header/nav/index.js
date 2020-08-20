import classes from './style.module.css'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../'

const LinkHash = ({ id, children, ...props }) => {
    const { hash } = useContext(AppContext)
    // const [selected, changeSelected] = useState(false)

    // useEffect(() => {
    //     window.addEventListener("hashchange", () => {
    //         changeSelected(window.location.hash === '#' + id)
    //     })
    // }, [])
    return (
        <a href={'#'+id} className={classes.link} style={{ 
            fontWeight: hash === id ? 'bold' : 'normal',
        }} {...props}> { children } </a>
    )
}

const Nav = () => {
    const [open, setOpen] = useState(false)
    const classesOpen = classes[open ? 'btnClose' : 'btnOpen']
    const classesIcon = open ? 'fa fa-times' : 'fas fa-bars'

    return (
        <>
            <nav className={`${classes.nav} ${classes[open ? 'navOpen' : 'navClose']}`}>
                <LinkHash id='what-we-do' onClick={() => setOpen(false)}> What we do </LinkHash>
                <LinkHash id='who-we-are' onClick={() => setOpen(false)}> Who we are </LinkHash>
                <LinkHash id='contact-us' onClick={() => setOpen(false)}> Contact us </LinkHash>
            </nav>
            <button className={classesOpen + ' ' + classesIcon}
                onClick={()=>setOpen(!open)} > </button>
        </>
    )
}

export default Nav
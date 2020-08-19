import classes from './style.module.css'
import { useContext } from 'react'
import { AppContext } from '..'

const AncorHash = ({ id, children }) => {
    const { hash } = useContext(AppContext)
    return (
        <a href={'#'+id} style={{ 
            fontWeight: hash === id ? 'bold' : 'normal',
            textDecoration: 'none',
            color: 'black'
        }}> { children } </a>
    )
}

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <AncorHash id='what-we-do'> What we do </AncorHash>
            <AncorHash id='who-we-are'> Who we are </AncorHash>
            <AncorHash id='contact-us'> Contact us </AncorHash>
        </nav>
    )
}

export default Nav
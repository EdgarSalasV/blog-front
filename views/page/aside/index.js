import Link from 'next/link'
import classes from './style.module.css'

const Aside = () => {
    return (
        <aside className={classes.aside}>
            <span> By Guaoustudio 2019 |</span> 
            <Link href='/terms'>
                <a style={{color: 'var(--gold)'}}>
                    Terms and Conditions  
                </a>
            </Link>
        </aside>
    )
}

export default Aside
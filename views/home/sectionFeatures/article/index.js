import classes from './style.module.css'
import { useContext } from 'react'
import { AppContext } from '../../../page'


const Article = ({ article={} }) => {
	const { articles } = useContext(AppContext)
	const { title, body, icon } = articles[0]

	return (
		<section className={classes.article}>
			<main className={classes.main}> 
			    <h3 className={classes.title}>
					<i className={icon}></i>
					{ title }
				</h3>
                <div dangerouslySetInnerHTML={{__html: body}}></div>
            </main>
            <aside className={classes.aside}>
                <button className={classes.button}> HIRE US </button>
            </aside>
		</section>
	)
}

export default Article
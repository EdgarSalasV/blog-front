import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../page'
import classes from './style.module.css'
import setCapitalize from '../../../utils/setCapitalize'

const id = ({ id }) => {
	const [blog, setBlog] = useState({})
	const { user } = useContext(AppContext)

	useEffect(() => {
		if (user) {
			if (user.token && !blog.title) {
				const config = {
					headers: {
						'Authorization': 'Bearer ' + user.token
					}
				}

				fetch('http://localhost:3001/blogs/'+id, config)
					.then(res => res.json())
					.then(setBlog)
			}
		}
	}, [user])

	const { title, body, blogTags } = blog

	const getTags = () =>
		blogTags.map(({ title, color }, i) => {
			return (
				<em key={i} className={'em' + setCapitalize(color)}>
					{title}
				</em>
			)
		})	
		
	return (
		<>
		{
			title && 
			<div>
				<h1 className={classes.title}> { title.toUpperCase() } </h1>
				<aside className={classes.tags}> {getTags()} </aside>
				<main className={classes.main}
					dangerouslySetInnerHTML={{ __html: body }}></main>
			</div>
		}
		</>
	)
}

export default id

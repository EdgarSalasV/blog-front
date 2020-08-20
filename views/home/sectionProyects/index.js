import classes from './style.module.css'
import { useContext } from 'react'
import { AppContext } from '../../page'

const Type = ({ type }) => {
	const { changeTypeProjectSelected, typeProjectSelected } = useContext(AppContext)
	return (
		<span onClick={()=>changeTypeProjectSelected(type)}
			style={{
				textTransform: 'uppercase',
				fontWeight: type === typeProjectSelected ? 'bold' : 'normal',
				cursor: 'pointer'
			}}> 
			{ type } </span>
	)
}

const Types = () => {
	const { projectTypes  } = useContext(AppContext)
	return (
		<nav className={classes.nav}>
			<Type type='all' />
			{
				projectTypes.map((type, i) => {
					return(
						<span key={i}>
							<span> | </span>
							<Type type={type} key={i} />
						</span>
					)
				})
			}
		</nav>
	)
}

// projects, setProjects, typeProject
const sectionProyects = () => {
	const { projectSelected, changeProjectSelected } = useContext(AppContext)
	const { img, name, location, software } = projectSelected 
	return (
		<section id='who-we-are' className={classes.container}>
			<Types />
			<header className={classes.header}>
				<img src={img} alt="" />
				<div className={classes.actions}>
					<button onClick={() => changeProjectSelected('previous') }> {'<'} </button>
					<button onClick={() => changeProjectSelected('next') }> {'>'} </button>
				</div>
			</header>
			<main className={classes.main}>
				<p> <b>Project Name: </b> {name} </p>
				<p> <b>Location: </b> {location} </p>
				<p> <b>Software's: </b> {software} </p>
			</main>
		</section>
	)
}

export default sectionProyects

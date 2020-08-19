import classes from './style.module.css'

const _project = {
	img: 'https://picsum.photos/500/300',
	name: 'Mediterranean Home',
	location: 'Cabo San Lucas, México',
	software: '3D Max, Vray'
}

const Type = ({ type, changeType }) => {
	return (
		<span onClick={()=>changeType(type)}
			style={{
				textTransform: 'uppercase'
			}}> 
			{ type } </span>
	)
}

const getTypes = types => {
	return types.map((type, index) =>
		<span key={index}>	
			<span style={{
				padding: '0 .75em'
			}}>  |  </span>
			<Type type={type} />
		</span>
	)
}
const _types = [
	'RESIDENTIAL',
	'COMMERCIAL',
	'PRODUCT DESIGN'
]

// projects, setProjects, typeProject
const sectionProyects = ({ types=_types, project=_project, next=()=>{}, previous=()=>{} }) => {
	const { img, name, location, software } = project
	return (
		<section id='who-we-are' className={classes.container}>
			<nav className={classes.nav}>
				<Type type='all' />
				{ getTypes(types) }
			</nav>
			<header className={classes.header}>
				<img src={img} alt="" />
				<div className={classes.actions}>
					<button onClick={previous}> {'<'} </button>
					<button onClick={next}> {'>'} </button>
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

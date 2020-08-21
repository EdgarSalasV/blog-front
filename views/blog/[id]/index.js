import classes from './style.module.css'

const id = ({ blog }) => {

    const { title, body, tags } = blog

    const getTags = () =>
        tags.map(({ title, color }, i) => {
            return (
                <em key={i} className={'em' + color}>
                    {title}
                </em>
            )
        })

    return (
        <div>
            <h1 className={classes.title}> {title} </h1>
            <aside className={classes.tags}> { getTags() } </aside>
            <main className={classes.main}
                dangerouslySetInnerHTML={{ __html: body }}></main>
        </div>
    )
}

export default id

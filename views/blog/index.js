import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../views/page'
import Link  from "next/link";
import classes from "./style.module.css";
import setCapitalize from '../../utils/setCapitalize'

const index = () => {
  const [blogs, setBlogs] = useState([])
  const { user } = useContext(AppContext)

  useEffect(() => {
    if(user) {
      if(user.token && !blogs.length) {
        const config = {
          headers: {
            'Authorization': 'Bearer ' + user.token
          }
        }
    
        fetch('http://localhost:3001/blogs', config)
          .then(res => res.json())
          .then(setBlogs)
      }
    }
  }, [user])

  const getCardData = () => blogs.map(
    ({ id, image, title, blogTags, smallDescription }, i) => (
      <article className={classes.card} key={id + i}>
        <div className={classes.cardImage}>
          <img src='https://source.unsplash.com/random' alt='Image of Blog' />
        </div>
        <h3>
          {title} 
        </h3>
        <div>
          { blogTags.map(({color, title},i) =>
          <em key={i} className={"em" + setCapitalize(color)}>{title}</em>) }
        </div>
        <p>{smallDescription}</p>
        <Link href="/blogs/[id]" as={"/blogs/" + id }>
          <a className={`${classes.button} btnAction`}>
            Read more...
          </a>
        </Link>
      </article>
    )
  );

  return (
    <>
      <h2 className={`secondTitle ${classes.blogTitle}`}>Blogs</h2>
      <section className={classes.cardRow}>
        {getCardData()}
      </section>
    </>
  );
};

export default index;

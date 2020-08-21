import Link  from "next/link";
import classes from "./style.module.css";

const index = ({ blogs }) => {
  const getCardData = () => blogs.map(
    ({ id, image, title, tag, smallDescription }, i) => (
      <article className={classes.card} key={id + i}>
        <div className={classes.cardImage}>
          <img src={image.url + i} alt={image.alt} />
        </div>
        <h3>
          {title} <em className={"em" + tag.color}>{tag.title}</em>
        </h3>
        <p>{smallDescription}</p>
        <Link href="/blog/[id]" as={"/blog/" + (id + i)}>
          <a href="#" className={classes.button}>
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

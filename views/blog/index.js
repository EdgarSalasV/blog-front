import Link from "next/link";
import classes from "./style.module.css";

const getCardData = () => {
  const cardData = {
    id: 1,
    image: {
      url: "https://source.unsplash.com/",
      alt: "random",
    },
    title: "Card Blog",
    tag: { title: "chale", color: "Red" },
    smallDescription: `Liquorice candy macaroon soufflé jelly cake. Candy canes ice cream
    biscuit marzipan. Macaroon pie sesame snaps jelly-o.`,
  };
  const array = [];
  for (let index = 0; index < 5; index++) {
    array.push(cardData);
  }

  return array.map(({ id, image, title, tag, smallDescription }, i) => (
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
  ));
};
const index = () => {
  const cardData = getCardData();
  return (
    <>
      <h2 className={`secondTitle ${classes.blogTitle}`}>Blogs</h2>
      <section className={classes.cardRow}>
        <article className={classes.card}>
          <div className={classes.cardImage}>
            <img
              src="https://placeimg.com/320/240/tech"
              alt="Preview of Whizzbang Widget"
            />
          </div>
          <h3>
            Whizzbang Widget SuperDeluxe <em>$25</em>
          </h3>
          <p>
            Liquorice candy macaroon soufflé jelly cake. Candy canes ice cream
            biscuit marzipan. Macaroon pie sesame snaps jelly-o.
          </p>
          <a href="#" className={classes.button}>
            Read more...
          </a>
        </article>
        {getCardData()}
      </section>
    </>
  );
};

export default index;

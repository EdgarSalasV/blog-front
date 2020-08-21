import index from "../../views/blog";

export async function getServerSideProps({ params }) {
  // const blogs = await axios.get('/blogs').data
  const data = {
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
  const blogs = [];
  for (let index = 0; index < 5; index++) {
    blogs.push({...data});
  }

  return {
    props: { blogs },
  };
}

export default index;

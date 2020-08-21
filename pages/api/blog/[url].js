// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  const {
    query: { url },
  } = req

  const title = url.split('-').join(' ').toUpperCase()

  const blog = {
    title,
    tags: [
      {
        title: 'Danger',
        color: 'Red'
      },
      { 
        title: 'Cloud',
        color: 'Blue'
      }
    ],
    body: /* html */`
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in>
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditi>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim pe>
    `
  }


  res.json(blog)
}

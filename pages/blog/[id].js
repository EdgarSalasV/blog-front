import axios from 'axios'
import id from '../../views/blog/[id]'

export async function getServerSideProps({ params }) {
  // const blog = await axios.get('/blog/' + params).data
  const blog = {
    title: 'Titulaso',
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in explicabo laboriosam consequuntur. Dolores, nam? Inventore dicta, saepe, suscipit neque ab repellendus ipsam culpa, officiis quaerat laboriosam quam rem corporis!</p>
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ratione ipsam eos, explicabo ducimus est sint velit expedita eius quo id soluta cumque minus rem porro placeat sit asperiores pariatur.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim perspiciatis porro debitis totam accusamus atque quos vel adipisci nulla? Saepe, vitae aperiam laudantium aliquid velit delectus laborum possimus sunt? Aspernatur!</p>
    `
  }
  return {
    props: { blog },
  }
}

export default id
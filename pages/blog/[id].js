import axios from 'axios'
import Id from '../../views/blog/[id]'

export async function getServerSideProps(context) {
   const id = context.params.id
   const blog = (await axios.get('http://localhost:3000/api/blog/' + id)).data
   return {
 	  props: { blog },
   }
}

export default Id

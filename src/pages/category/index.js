import axios from 'axios'
import Layout from "@/components/Layout"
import Category from '@/components/Category'


function Home({ categories }) {
  return (
    <div className="container mx-auto mb-16">
      <h1 className="my-8 text-3xl font-bold text-white">Categories</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout title='Categories'>
      {page}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = axios.get('https://api.escuelajs.co/api/v1/categories')
  const data = await res.then(res => res.data).catch(err => [])
  return {
    props: {
      categories: data,
    }
  }
}

export default Home

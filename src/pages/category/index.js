import Link from 'next/link'
import Layout from "@/components/Layout"


function Home({ categories }) {
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-3xl font-bold text-white">Categories</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="object-cover w-full h-64" src={category.image} alt={category.name} />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold text-gray-900">{category.name}</div>
              </div>
            </div>
          </Link>
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
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories')
    const data = await response.json()
    return {
      props: {
        categories: data,
      },
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        categories: [],
      },
    }
  }
}

export default Home

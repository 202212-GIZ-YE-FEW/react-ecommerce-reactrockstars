import { useState } from 'react'
import axios from 'axios'
import ProductCard from '@/components/ProductCard'
import Layout from '@/components/Layout'

function Home({ products }) {
    const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 12))

    const loadMore = () => {
        const nextBatch = products.slice(displayedProducts.length, displayedProducts.length + 12)
        setDisplayedProducts([...displayedProducts, ...nextBatch])
    };

    return (
        <div className="container mx-auto">
            <h1 className="my-8 text-3xl font-bold text-black">Products</h1>
            <div className="grid grid-cols-6 gap-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-4">
                {displayedProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
            {displayedProducts.length < products.length && (
                <div className="flex items-center justify-center w-full">
                    <button onClick={loadMore} className="my-4 px-4 py-2 bg-blue-500 text-white rounded">
                        Load More
                    </button>
                </div>
            )}
        </div>
    )
}

Home.getLayout = function getLayout(page) {
    return <Layout title="Products">{page}</Layout>
}

export async function getStaticProps() {
    const res = axios.get('https://api.escuelajs.co/api/v1/products')
    const data = await res.then((res) => res.data).catch((err) => [])
    return {
        props: {
            products: data,
        },
    }
}

export default Home

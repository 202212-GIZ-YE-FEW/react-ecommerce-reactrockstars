import { useState } from 'react'
import axios from 'axios'
import ProductCard from '@/components/ProductCard'
import Layout from '@/components/Layout'

function Home({ products }) {
    const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 12))
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchInput = event => {
        setSearchQuery(event.target.value)
        setDisplayedProducts(products.filter(product => product.title.toLowerCase().includes(event.target.value.toLowerCase())).slice(0, 12))
    }

    const loadMore = () => {
        const nextBatch = products
            .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .slice(displayedProducts.length, displayedProducts.length + 12)
        setDisplayedProducts([...displayedProducts, ...nextBatch])
    }

    return (
        <div className="container mx-auto">
            <h1 className="my-8 text-3xl font-bold text-black">Products</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    className="w-full px-4 py-2 border border-gray-400 rounded-md"
                />
            </div>
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

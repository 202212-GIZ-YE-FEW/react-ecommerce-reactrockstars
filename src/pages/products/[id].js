import Head from 'next/head'
import axios from 'axios'
import Layout from '@/components/Layout'

export default function Product({ product }) {
    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <div className="flex justify-center mb-4">
                    <img src={product.images[0]} alt={product.name} className="max-w-full max-h-80 rounded-lg shadow-md" />
                </div>
                <p className="text-lg mb-4">{product.description}</p>
                <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
            </div>
        </>
    )
}

Product.getLayout = function getLayout(page) {
    return <Layout title="Product">{page}</Layout>
}

export async function getStaticPaths() {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products')
    const products = res.data || [];

    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
    const product = res.data || {}

    return { props: { product } }
}

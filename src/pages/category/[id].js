import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Layout from "@/components/Layout"
import Product from '@/components/Product';

function Category() {
  const router = useRouter()
  const { id } = router.query
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!id) return
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${parseInt(id)}`)
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    if (id) {
      fetchProducts()
    }
  }, [id])
  if (!id) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span>No category selected.</span>
      </div>
    )
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg className="w-5 h-5 mr-3 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 00-8-8V0c6.627 0 12 5.373 12 12h-4zm-4 4a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z"></path>
        </svg>
        <span>Loading...</span>
      </div>
    )
  }
  if (!products.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span>No products found for this category.</span>
      </div>
    )
  }

  return (
<section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">    
  {products.map((product) => (
        <Product product={product}/>
      ))}
    </section>
  )
}


Category.getLayout = function getLayout(page) {
  return (
    <Layout title='Category'>
      {page}
    </Layout>
  )
}
export default Category

import { useRouter } from 'next/router'
import React, { useState, useEffect, lazy, Suspense } from 'react'
import Layout from "@/components/Layout"

const ProductCard = lazy(() => import('@/components/ProductCard'))

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

  const [visibleProducts, setVisibleProducts] = useState([])
  const [loadMoreVisible, setLoadMoreVisible] = useState(true)

  useEffect(() => {
    if (products.length) {
      setVisibleProducts(products.slice(0, 8))
    }
  }, [products])

  const loadMore = () => {
    const startIndex = visibleProducts.length
    const endIndex = startIndex + 8
    setVisibleProducts([...visibleProducts, ...products.slice(startIndex, endIndex)])
    if (endIndex >= products.length) {
      setLoadMoreVisible(false)
    }
  }

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
        <h1>No products found for this category.</h1>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-6 gap-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-4 p-8">
      <Suspense fallback={<div>Loading...</div>}>
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {loadMoreVisible && (
        <div className="flex items-center justify-center w-full">
          <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={loadMore}>Load more</button>
        </div>
      )}
    </Suspense>
    </div>
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

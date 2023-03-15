import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'


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
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div key={product.id} className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="overflow-hidden bg-white rounded shadow-lg">
            <img className="object-cover w-full h-64" src={product.images[0]} alt={product.title} />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-gray-900">{product.title}</div>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{product.category.name}</span>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{product.price} </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Category

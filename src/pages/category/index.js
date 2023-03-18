import axios from 'axios'
import React, { useState } from 'react'
import Layout from "@/components/Layout"
import Category from '@/components/Category'


function Home({ categories }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [displayedCategories, setDisplayedCategories] = useState(categories.slice(0, 12))

  const handleSearchInput = event => {
    setSearchQuery(event.target.value)
    setDisplayedCategories(categories.filter(category => category.name.toLowerCase().includes(event.target.value.toLowerCase())).slice(0, 12))
  }

  return (
    <div className="container mx-auto mb-16">
      <h1 className="my-8 text-3xl font-bold text-white">Categories</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchInput}
          className="w-full px-4 py-2 border border-gray-400 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedCategories.map((category) => (
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

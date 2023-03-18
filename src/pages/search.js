import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Search() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { query } = router.query;
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${query}`);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [router.query]);

  const handleSearch = async (event) => {
    const query = event.target.value;
    router.push(`/search?query=${query}`);
    setIsLoading(true);
  };

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Home
          </button>
        </Link>
      </div>
      <div className="mb-4">
        <label htmlFor="search" className="block mb-2 font-bold text-gray-700">
          Search:
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Search products..."
          onChange={handleSearch}
        />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <span className="loader"></span>
        </div>
      ) : products.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Search Results for "{router.query.query}"
          </h1>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <li key={product.id} className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
                <div className="flex flex-col flex-1 p-8">
                  <img src={product.images[0]} alt={product.title} className="object-contain h-48 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                  <div className="flex-1 py-2">{product.description}</div>
                  <div className="mt-4">
                    <span className="font-medium text-gray-900">{product.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;

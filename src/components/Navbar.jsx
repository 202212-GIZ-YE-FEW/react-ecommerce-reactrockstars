import Link from 'next/dist/client/link'
import { useState } from 'react'


const Navbar = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSearchInput = event => {
    setSearchTerm(event.target.value)
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="bg-orange-400">
      <div style={{ paddingTop: '20px', paddingBottom: '20px', background: 'linear-gradient(EB5160 5%, EB5160 20px, orange 80px)', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1), 0px -4px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="px-6 mx-auto max-w-8xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" as="/">
              <div className="text-3xl font-bold text-white">Store</div>
            </Link>
            <ul className="flex">
              <li>
                <Link href="/cart" legacyBehavior>
                  <a className="flex items-center text-gray-800">
                    <svg className="h-6 w-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v2M4 8h16M4 12h16M4 16v2"></path>
                    </svg>
                    <span>Cart</span>
                  </a>
                </Link>
              </li>
              <li className="ml-6">
                <Link href="/account" className="text-gray-800">Account
                </Link>
              </li>
            </ul>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  className="w-64 px-4 py-2 pl-10 text-gray-700 bg-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchInput}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg
                    className="w-6 h-6 text-gray-400 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4c-3.31 0-6 2.69-6 6 0 2.18 1.16 4.08 2.89 5.14l-1.43 1.43c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.44-1.44c1.06 1.73 2.96 2.89 5.14 2.89 3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <button
                  className="flex items-center px-3 py-2 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                  onClick={handleDropdownToggle}>
                  <span>Categories</span>
                  <svg
                    className={`w-4 h-4 ml-1 ${isDropdownOpen ? 'transform rotate-180' : ''
                      }`}
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6.29289 7.29289C6.65338 6.93241 7.22061 6.90468 7.6129 7.2097L7.70711 7.29289L10 9.585L12.2929 7.29289C12.6534 6.93241 13.2206 6.90468 13.6129 7.2097L13.7071 7.29289C14.0676 7.65338 14.0953 8.22061 13.7903 8.6129L13.7071 8.70711L10.7071 11.7071C10.3166 12.0976 9.68342 12.0976 9.29289 11.7071L6.29289 8.70711C5.90237 8.31658 5.90237 7.68342 6.29289 7.29289Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute z-10 py-2 mt-2 overflow-auto text-sm bg-white rounded-md shadow-xl w-35 max-h-64"
                    style={{ display: 'block' }}>
                    {categories.map((category) => (
                      <div key={category.id}>
                        <Link href={`/category/${category.id}`} as={`/category/${category.id}`}>
                          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {category.name}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

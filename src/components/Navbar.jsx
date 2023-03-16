import { useState } from 'react'
import Link from 'next/dist/client/link'


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
    <nav className="header px-4">
      <a className="menu-icon" href="#">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </a>
      <img className="logo" src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" />
      <div className="header-menu flex px-10">
        <a href="#" className="transform transition-transform duration-500 ease-in-out hover:translate-x-2">
          Mask
        </a>
        <a href="#" className="transform transition-transform duration-500 ease-in-out delay-100 hover:translate-x-2">
          Helmet
        </a>
        <a href="#" className="transform transition-transform duration-500 ease-in-out delay-200 hover:translate-x-2">
          Bottle
        </a>
        <a href="#" className="transform transition-transform duration-500 ease-in-out delay-300 hover:translate-x-2">
          Accessories
        </a>
      </div>
      <div className="flex gap-3 w-full justify-end px-5">
        <input
          type="text"
          className="w-64 px-4 py-2 pl-10 text-gray-700 bg-blue-100 rounded-md focus:outline-none focus:ring-2 "
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <div className="relative">
          <button
            className="flex items-center px-3 py-2 text-white bg-[#e9bf8b] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
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
      <div className="header-icons">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.955 208.955">
          <path d="M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h49.936v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h19.364l11.418 127.158H33.709z" />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar
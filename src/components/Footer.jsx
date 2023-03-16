import Link from 'next/link'

const Footer = ({ categories }) => {
  return (
    <footer className="footer py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center">
          <div className="w-full max-w-xs lg:max-w-md mb-8 lg:mb-0">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-900">
              <img className="logo" src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" />
              Reactrockstars Store
            </Link>
            <p className="mt-2 text-gray-600">Shop for the best products</p>
          </div>
          <div className="w-full max-w-xs lg:max-w-md mb-8 lg:mb-0">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="rounded-md">
                  <Link href={`/category/${category.id}`} as={`/category/${category.id}`} className="text-gray-600 hover:text-gray-800 font-medium text-lg">
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-xs lg:max-w-md mb-8 lg:mb-0">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Information</h3>
            <ul>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-600 text-center">
            ©  Reactrockstars Store {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

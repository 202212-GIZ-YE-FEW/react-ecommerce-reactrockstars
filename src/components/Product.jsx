import React from 'react'
import Button from '@mui/material/Button';

function Product({product}) {
  return (
    <div>
        <div class="w-72 bg-white shadow-md rounded-xl duration-200 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
            <a href="#">
              <img src={product.images[0]} alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
              <div class="px-4 py-3 w-72">
                {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <p class="text-lg mb-0 font-bold text-black truncate block capitalize">{product.title}</p>
                <div class="flex items-center">
                  <p class="text-lg font-bold text-[var(--savanna-dark)] cursor-auto">${product.price}</p>
                </div>
              </div>
            </a>
            <Button class="ml-auto flex justify-center gap-2 w-full py-2 hover:bg-[var(--savanna-bg)] hover:text-white transition-all">
              Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
            </Button>
          </div>
    </div>
  )
}

export default Product
import React from 'react'

import Button from '@mui/material/Button';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
function CartProduct({ product, decreaseQuantity, addToCart, removeFromCart }) {
    return (

        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={product.images[0]} alt="product-image" class="w-full rounded-lg sm:w-40" />
            <div class="sm:ml-4 w-full flex sm:w-full justify-between">
                <div class="mt-5 sm:mt-0">
                    <h2 class="text-gray-500">{product.title}</h2>
                    <p class="mt-1 text-gray-700 text-[var(--savanna-dark)] font-bold">${product.price}</p>
                </div>
                <div class="mt-4 flex justify-between items-end flex-col sm:flex-col sm:space-y-6 sm:mt-0 sm:space-x-6">
                    <Button
                        className='text-black hover:bg-gray-100 flex justify-end pr-0'
                        onClick={() => removeFromCart(product)}
                    >
                        <DeleteOutlineRoundedIcon />
                    </Button>
                    <div class="flex items-center border-gray-100">
                        <button
                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => decreaseQuantity(product)}
                        > - </button>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product.quantity} min="1" />
                        <button
                            class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => addToCart(product)}
                        > + </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
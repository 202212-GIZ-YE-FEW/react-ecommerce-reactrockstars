import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CartProduct from './CartProduct';
import MyContext from '@/contexts/MyContext';

export default function Cart({ anchor, toggleDrawer}) {
    const {products, decreaseQuantity, addToCart, removeFromCart } = React.useContext(MyContext);
    const total = products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0);
      const shipping = 14.5;
    return (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div class="min-h-screen min-w-[15rem] bg-gray-100 pt-5 relative">
                <Button className="absolute text-black"
                    onClick={toggleDrawer(anchor, false)}
                >
                    <ClearRoundedIcon />
                </Button>
                <h1 class="my-6 text-center text-2xl font-bold">
                    {products.length && products.length>0 ? 'Cart Items' : 'Cart is empty'}
                    </h1>
                {
                    products.length >0 &&
                    <div class="mx-auto max-w-5xl flex flex-col px-6 h-full xl:px-0">
                        <div class="rounded-lg ">
                            <div>
                                {products.map((product)=>{
                                    return <CartProduct
                                        key={product.id}
                                        product={product}
                                        decreaseQuantity={decreaseQuantity}
                                        addToCart={addToCart}
                                        removeFromCart={removeFromCart}
                                    />
                                })}
                            </div>
                        </div>

                        <div class="mt-6 h-full w-full mx-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
                            <div class="mb-2 flex justify-between">
                                <p class="text-gray-700">Subtotal</p>
                                <p class="text-gray-700">${total}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">Shipping</p>
                                <p class="text-gray-700">${shipping}</p>
                            </div>
                            <hr class="my-4" />
                            <div class="flex justify-between">
                                <p class="text-lg font-bold">Total</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">${shipping + total} USD</p>
                                    <p class="text-sm text-gray-700">including VAT</p>
                                </div>
                            </div>
                            <button class="mt-6 transition w-full rounded-md bg-[var(--savanna-bg)] py-1.5 font-medium hover:bg-[var(--beach-bg)]">Check out</button>
                        </div>
                    </div>
                }
            </div>
        </Box>
    );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CartProduct from './CartProduct';
export default function Cart({ anchor, toggleDrawer }) {
    return (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >


            <div class="min-h-screen bg-gray-100 pt-5 relative">
                <Button className="absolute text-black"
                    onClick={toggleDrawer(anchor, false)}
                >
                    <ClearRoundedIcon />
                </Button>
                <h1 class="mb-6 text-center text-2xl font-bold">Cart Items</h1>
                <div class="mx-auto max-w-5xl flex flex-col px-6 h-full xl:px-0">
                    <div class="rounded-lg ">
                        <CartProduct product={{
                            title: "Nike Air Max 2019",
                            price: 999,
                            id: 3,
                            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        }}/>
                        <CartProduct product={{
                            title: "Nike Air Max 2019",
                            price: 1999,
                            id: 3,
                            image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                        }}/>
                        
                        
                        {/* <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src=" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">259.000 ₭</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div> */}
                    </div>

                    <div class="mt-6 h-full w-full mx-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Subtotal</p>
                            <p class="text-gray-700">$129.99</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-gray-700">Shipping</p>
                            <p class="text-gray-700">$4.99</p>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                                <p class="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button class="mt-6 transition w-full rounded-md bg-[var(--savanna-bg)] py-1.5 font-medium hover:bg-[var(--beach-bg)]">Check out</button>
                    </div>
                </div>
            </div>

            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
            {/* <Divider /> */}
        </Box>
    );
}
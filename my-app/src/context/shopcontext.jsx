import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';
import Product from '../pages/shop/product';

export const ShopContext = createContext(null)

const getdefaultcart = () =>{
    let cart = {};
    for (let i = 1  ; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {
    const[cartitems, setcartitems] = useState(getdefaultcart());
    const getTotalCart = () =>{
        let totalamount = 0;
        for (const item  in cartitems){
            if (cartitems[item]>0){
                let itemInfo = PRODUCTS.find((Product)=>Product.id === Number(item));
                totalamount += cartitems[item] * itemInfo.price
            }
        }
        return totalamount;
    };
    const addToCart = (itemid) =>{
        setcartitems((prev) =>({...prev, [itemid]: prev[itemid] + 1}))
    };
    const removeFromCart = (itemid) =>{
        setcartitems((prev) =>({...prev, [itemid]: prev[itemid] - 1}))
    }
    const updatecartitem = (newAmount, itemid)=>{
        setcartitems ((prev) =>({   ...prev, [itemid]:newAmount}));
    }
    const contextvalue = {cartitems , addToCart , removeFromCart , updatecartitem, getTotalCart}
  return (
  <ShopContext.Provider value={contextvalue}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

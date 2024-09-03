import React,{ useContext}  from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shopcontext';
import { CartItem } from './cartitem'
import'./cart.css'

import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const navigate =useNavigate()
  const{cartitems, getTotalCart } = useContext(ShopContext);
  const totalamount = getTotalCart()
  return (
    <div className='cart'>
      <div className=""><h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
          {PRODUCTS.map((Product)=>{
            if(cartitems[Product.id]!==0){
              return<CartItem data={Product}/>
            }
          })}
      </div>
     {totalamount > 0 ? (
      <div className='checkout'>
        
        <p>subtotal : ${totalamount}</p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    ) : (
      <h1>Add something to your cart bro</h1>)};
    </div>   
  );
};

export default Cart

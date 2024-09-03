import React, {useContext}from 'react'
import { ShopContext } from '../../context/shopcontext';

export const CartItem = (props) => {
    const{ id, productName, price, productImage }=props.data;
    const{ cartitems, addToCart,removeFromCart ,updatecartitem} = useContext(ShopContext);

  return (
    <div className='cartItem'>
      <img src={productImage}/>
      <div className="desk">
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className="counthandler">
            <button onClick={()=> addToCart(id)}> + </button>
            <input value={cartitems[id]} onChange={(e) =>updatecartitem(Number(e.target.value), id)} />
            <button onClick={()=> removeFromCart (id)}> - </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

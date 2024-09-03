import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopcontext';

export const Product = (props) => 
{
    const{ id, productName, price, productImage }=props.data;
    const{ addToCart, cartitems } = useContext(ShopContext);
        const cartitemsamount = cartitems[id]
    return (
    <div className='product'>
      <img src={productImage}/>
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className='addtocart' onClick={() => addToCart(id)}>
        Add To Cart{cartitemsamount > 0 && <>({cartitemsamount})</>}
        </button>
    </div>
  )
}

export default Product

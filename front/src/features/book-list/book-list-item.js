

import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function BookListItem(props) {
  return <div  className='text-center product-list-item col-md-4'>

  <div className='mr-2'>

     <h5>{ props.product.title }</h5>
    <img
      height={100}
      alt={ props.product.title }
      title={ props.product.title }
      src={`${props.product.cover_url}`}
    />
    <div>{ props.product.author }</div>
    <div>{ props.product.price }{ props.product.currency }</div>
    <div>
      <AddBtn
        cartItem={props.cartItem}
        product={props.product}
        addToCart={props.addToCart}
      />

      {
        props.cartItem
          ? <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
          : null
      }
  </div>
   
    </div>
  </div>
}
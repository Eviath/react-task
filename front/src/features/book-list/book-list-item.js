

import React from 'react'
import AddBtn from './add-btn'
import FavBtn from './fav-btn'
import RemoveBtn from './remove-btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(?:\d{2})+(?!\d))/g, ".");
}

export default function BookListItem(props) {
  return <div  className='text-center product-list-item outer-product justify-content-around col-md-4'>


  <div className='product-item '>

  <div className="product-header">
    <img
      height={300}
      alt={ props.product.title }
      title={ props.product.title }
      src={`${props.product.cover_url}`}
    />
    <hr/>
    <h2>{ props.product.title }</h2>
    <div><p>{ props.product.author }</p></div>
    <div><p className="price">{`Cena: ${numberWithCommas(props.product.price)} zł`}</p></div>
    </div>

  <div class="outer-button-div">
        <div className="button-div">
        <ul class="nav nav-stacked">
          <li class="nav-item">
          <FavBtn/>
          </li>
          <li class="nav-item">
          <AddBtn
        cartItem={props.cartItem}
        product={props.product}
        addToCart={props.addToCart}
      />
          </li>
          <li class="nav-item">
          {
        props.cartItem
          ? <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
          : null
      }
          </li>
        </ul>
       
 

  </div>

  </div>
   
    </div>

  </div>
}
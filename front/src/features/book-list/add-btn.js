import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddButton(props) {
  return <button className="btn btn-light btn-block"

  onClick={() => props.addToCart(props.product)}
  ><FontAwesomeIcon icon="shopping-cart" /> ({
    (props.cartItem && props.cartItem.quantity )  || 0
  })</button>
}
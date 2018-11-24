import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FavButton(props) {
  return <button className="btn btn-light btn-block"

  onClick={() => props.addToCart(props.product)}
  ><FontAwesomeIcon icon="heart" /></button>
}
import React from 'react'



export default function RemoveButton(props) {
  return <button className="btn btn-light btn-block"

  onClick={() => props.removeFromCart(props.cartItem)}
  >Usuń </button>
}
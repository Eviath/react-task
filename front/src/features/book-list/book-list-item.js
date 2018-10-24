import React from 'react'



 export default function BookListItem(props) {
  return <div className='product-list-item'>
    <h3>{props.title}</h3>
    <div>{ props.author }</div>
    <div>{ props.pages }</div>
    <div>${ props.price }</div>
    <div><button>Add to cart</button></div>
  </div>
 }
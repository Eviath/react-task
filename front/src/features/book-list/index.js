import React from 'react'
import BookListItem from './book-list-item'
 import './styles.css'

 
 export default function BookList(props) {
  return <div className="product-listing">
    {
      props.books.map( book =>
        <BookListItem {...book} />)
    }
  </div>
 }
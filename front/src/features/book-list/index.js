import React from 'react'
import { connect } from 'react-redux'
import BookListItem from './book-list-item'


function BookList(props) {
  return <div className="product-listing container mx-auto">
    {
      props.books.map( book =>
        <BookListItem
          product={book}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === book.id)[0]}
        />)
    }
  </div>
}



function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(BookList)
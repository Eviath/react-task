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
          addToOrder={props.addToOrder}
          cartItem={props.cart.filter(cartItem => cartItem.id === book.id)[0]}
          orderItem={props.order.filter(orderItem => orderItem.id === book.id)[0]}
        />)
    }
  </div>
}



function mapStateToProps(state) {
  return {
    cart: state.cart,
    order: state.order
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    addToOrder: (item) => {
      dispatch({ type: 'ADD_TO_ORDER', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(BookList)
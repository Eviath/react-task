import React from 'react'
import { connect } from  'react-redux'



const sort = (items) => {
  return items.sort((a, b) => a.id < b.id)
}

function Cart(props)  {


  const hasProducts = props.cart.length > 0
  const nodes = hasProducts ? (

    <table className="table">
    <thead className="thead-dark">
      <tr>
      <th scope="col">Książka</th>
      <th scope="col">Ilość</th>
      <th scope="col"></th>
      <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {
        sort(props.cart).map(item => <tr>
          <td>{ item.title }</td>
          <td>{ item.quantity }</td>
          <td>
            <button
              onClick={(e) => props.addToCart(item)}
            >+</button>
            <button
              onClick={(e) => props.removeFromCart(item)}
            >-</button>
          </td>
          <td>
            <button
              onClick={(e) => props.removeAllFromCart(item)}
            >Usuń z koszyka</button>
          </td>
        </tr>)
      }
    </tbody>

  </table>


   
    )
   : (
    <em>Nie masz żadnych książek w koszyku!</em>
  )

  return  <div>{nodes}</div>
}


function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    addToOrder: (cart) => {
      dispatch({ type: 'ADD_TO_ORDER', payload: cart })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
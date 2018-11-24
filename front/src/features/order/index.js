import React from 'react'
import { connect } from  'react-redux'

const sort = (items) => {
  return items.sort((a, b) => a.id < b.id)
}



function Order(props) {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{2})+(?!\d))/g, ".");
}

  const hasProducts = props.order.length > 0
  const nodes = hasProducts ? (
      <table className="table">
      <thead className="thead-dark">
        <tr>
        <th scope="col">Książka</th>
        <th scope="col">Ilość</th>
        <th scope="col">Cena</th>
        <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          
          sort(props.order).map(item => <tr>
            <td>{ item.title }</td>
            <td>{ item.quantity }</td>
            <td>{ numberWithCommas(item.price) + "zł" } </td>
            <td>
            <button
              onClick={(e) => props.addToOrder(item)}
            >+</button>
            <button
              onClick={(e) => props.removeFromOrder(item)}
            >-</button>
          </td>
          <td>
            <button
              onClick={(e) => props.removeAllFromOrder(item)}
            >Usuń z zamówienia</button>
          </td>
          </tr>)
        }
      </tbody>
    </table>
   
    )
   : (
    <em>Nie masz żadnych książek w zamówieniu!</em>
  )

  return  <div>{nodes}</div>
}


function mapStateToProps(state) {
  return {
    order: state.order,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToOrder: (item) => {
      dispatch({ type: 'ADD_TO_ORDER', payload: item })
    },
    removeFromOrder: (item) => {
      dispatch({ type: 'ORDER_REMOVE', payload: item })
    },
    removeAllFromOrder: (item) => {
      dispatch({ type: 'ORDER_REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)



const orderWithoutItem = (order, item) => order.filter(orderItem => orderItem.id !== item.id)
const itemInOrder = (order, item) => order.filter(orderItem => orderItem.id === item.id)[0]

const addToOrder = (order, item) => {
  const orderItem = itemInOrder(order, item)
  return orderItem === undefined
    ? [ ...orderWithoutItem(order, item), { ...item, quantity: 1 }]
    : [ ...orderWithoutItem(order, item), { ...orderItem, quantity: orderItem.quantity + 1 }]
}


const removeFromOrder = (order, item) => {
  return item.quantity === 1
    ? [ ...orderWithoutItem(order, item) ]
    : [ ...orderWithoutItem(order, item), { ...item, quantity: item.quantity - 1 } ]
}

const removeAllFromOrder = (order, item) => {
  return [ ...orderWithoutItem(order, item) ]
}



const orderReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TO_ORDER':
      return addToOrder(state, action.payload)

    case 'ORDER_REMOVE':
      return removeFromOrder(state, action.payload)
    
    case 'ORDER_REMOVE_ALL':
      return removeAllFromOrder(state, action.payload)

    default:
      return state;
  }
}


export default orderReducer
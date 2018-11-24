import { createStore, combineReducers } from 'redux'

import cartReducer from '../features/cart/reducer'
import orderReducer from '../features/order/reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store
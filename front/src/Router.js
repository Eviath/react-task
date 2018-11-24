import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import CartPage from './pages/cart'
import OrderPage from './pages/order'

const routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route exact path='/cart' component={CartPage}></Route>
    <Route exact path='/order' component={OrderPage}></Route>
  </Switch>
)

export default routes
import React from 'react';
import { NavLink   } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from './Search'


export default class Header extends React.Component {

  render() {


    return (
      <div>



<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Book Store</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      <NavLink className="nav-link" to="/" >Oferta</NavLink> 
      </li>

    </ul>

    <Search/>


   <ul className="navbar-nav mr-auto mr-2 mr-lg-0">
    <li class="nav-item">
      <NavLink className="nav-link" to="/cart" ><span><FontAwesomeIcon icon="shopping-cart" /></span>Koszyk <span class="badge badge-secondary">3</span></NavLink>
      </li>
      </ul>
  </div>
</nav>


      </div>



    );
  }
}
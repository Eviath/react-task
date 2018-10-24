import React from 'react';
import { NavLink as RRNavLink  } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink to="/"  tag={RRNavLink}>Home</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink to="/cart" tag={RRNavLink}>Cart</NavLink> 
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
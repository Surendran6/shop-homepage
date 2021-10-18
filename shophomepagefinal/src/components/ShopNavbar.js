import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";

function ShopNavbar({ cart }) {
  return (   
    <Navbar   collapseOnSelect className="sticky-nav" expand="lg" bg="dark" variant="dark">      
        <Navbar.Brand href="#home">Trending shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">popular Items</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">New Arrival</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Old Stock</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Festival Sales</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="cart">
          <button className="btn btn-outline-info"><i className="fas fa-shopping-cart">
            <AiOutlineShoppingCart /></i> Cart  <span className="items_added">{cart}</span></button>
        </div>      
    </Navbar>
    
  );
}
export default ShopNavbar
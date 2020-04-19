import React from 'react';
import Logo from './assets/logo.png';
import './header.css'
import 
{ Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      
          <Navbar collapseOnSelect expand="lg" bg="light" style={{height:'15vh'}}>
        <Link to="/">
        <Navbar.Brand>
            <img
            src={Logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link >
                <Link to="/uploadprofiles">Upload Profiles</Link>
            </Nav.Link>
            <Nav.Link href="javascript:void(0);" >
              <Link to="/candidateStatus">Candidate Status</Link>
            </Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/uploadProfiles">
              Upload Profiles
            </Nav.Link>
          </Nav> */}
          <Button variant="outline-dark" style={{marginRight:'5px'}}>Sign Up</Button>
          <Button variant="outline-dark">Login</Button>
        </Navbar.Collapse>
      </Navbar>
     
    );
  }
}
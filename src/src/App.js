import React from 'react';
import logo from './logo.svg';
import Logo from './assets/logo.png';
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
import Header from './header';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container className="middle_container" fluid>
        <Row className="mid_container_row">
          <Col>
          <Link to="/uploadProfiles">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-upload fa-5x"></i>
                </Card.Title>
                <Card.Text>
                  <h6 style={{color:'rgba(0,0,0,.5)'}}>Upload Profile</h6>
                </Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </Col>
          <Col>
          <Link to="/candidateStatus">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <i className="far fa-question-circle fa-5x"></i>
                </Card.Title>
                <Card.Text>
                <h6 style={{color:'rgba(0,0,0,.5)'}}>Candidate Status</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          </Col>
          <Col>
            <Link to="/">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <i className="far fa-calendar-check fa-5x"></i>
                </Card.Title>
                <Card.Text>
                <h6 style={{color:'rgba(0,0,0,.5)'}}>Schedule Interview</h6>
                </Card.Text>
              </Card.Body>
            </Card>
            </Link>
            
          </Col>
        </Row>
      </Container>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Link to="/uploadProfiles">Upload Profiles</Link><hr/> */}
      <Footer/>
    </div>
  );
}

export default App;

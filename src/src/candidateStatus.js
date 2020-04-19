import React from 'react';
import logo from './logo.svg';
import Header from './header';
import Footer from './footer';
import'./candidateStatus.css';
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
  DropdownButton,
  Form,
  Badge
} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

function CandidateStatus() {
   const items = [];
   for(let i=0; i<=4;i++) {
       items.push(
        
            <Card className="jobCard">
                <Link to="/statusDetails">
                <Card.Header>JOB ID : ABC123</Card.Header>
                <Card.Body>
                <Row>
                    <Col className="jobDetails">
                        Job Title : Python Developer
                    </Col>
                    <Col className="jobDetails">
                        Experience : 3-7 Years
                    </Col>
                </Row>
                <footer>
                    <Badge variant="secondary">1 Day ago</Badge>
                </footer>
                </Card.Body>
                </Link>
            </Card>
       
       )
   }
  return (
    <div>
      <Header/>
      <Container className="middle_container statusContainer" fluid>
      <Row className="JobIdRow">
      
      {items}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default CandidateStatus;
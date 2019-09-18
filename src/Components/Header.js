import React, { Component } from 'react';
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../Stylesheets/Header.css';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dActive: false,
      iActive: false
    }
  }

  addActiveLetters = (evt) => {
    const letter = evt.target.id;
    letter === 'letter_d' ? this.setState({ dActive: true }) : this.setState({ iActive: true });
  }

  render() {

    let classNameStrD = `text-animation ${!this.state.dActive ? 'faulty-text-d' : ''}`;
    let classNameStrI = `text-animation ${!this.state.iActive ? 'faulty-text-i' : ''}`;

    let bothActive = this.state.dActive && this.state.iActive;

    classNameStrD = bothActive ? `correct-text text-animation enlarge-text` : classNameStrD;
    classNameStrI = bothActive ? `correct-text text-animation enlarge-text lean-bottom` : classNameStrI;

    return (
      <Navbar className="nav-bar">
        <Container className="container-fluid">
          <Nav>
            <Col xs="4.5">
              <Nav.Item>
                <NavLink exact to="/" className="nav-link">
                  Landing
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </NavLink>
              </Nav.Item>
            </Col>
            <Col xs="4.5">
              <Nav.Item>
                <NavLink exact to="/me" className="nav-link">
                  About
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </NavLink>
              </Nav.Item>
            </Col>
            <Col xs="4.5">
              <Nav.Item>
                <NavLink exact to="/projects" className="nav-link">
                  Projects
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </NavLink>
              </Nav.Item>
            </Col>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

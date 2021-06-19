import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import logo4 from "../img/logo4.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Horarios from "../pages/Horarios";

class NavigationBar extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="black"
            variant="dark"
            id="navbar"
            className=""
          >
            <img src={logo4} id="logo4" className="" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav  z" />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="mr-auto  mr-4  " id="nav2">
                <Link to="/" id="linkinicio" className="text-white p-3 ">
                  Inicio
                </Link>
                <Link to="/about" id="linksobre" className="text-white p-3 ">
                  Sobre la academia
                </Link>
                <Link to="/contact" id="linkabout" className="text-white p-3 ">
                  Nuestros programas
                </Link>
                <Link to="/horarios" id="linkabout" className="text-white p-3 ">
                  Horarios y tarifa
                </Link>
              </Nav>
              <Nav id="navsocial">
                <SocialIcon
                  url="https://www.facebook.com/Academia-Badalona-Jiujitsu-105699827432603/"
                  className="facebook"
                  target="_blank"
                  bgColor="red"
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="https://www.instagram.com/badalonajiujitsu/"
                  className="instagram"
                  bgColor="red"
                  target="_blank"
                  style={{ height: 35, width: 35 }}
                />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </React.Fragment>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/horarios" component={Horarios} />
        </Switch>
      
      </Router>
    );
  }
}

export default NavigationBar;

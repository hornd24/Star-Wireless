import React, {Component} from 'react';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import {Link} from 'react-router-dom';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import Button from 'react-bootstrap/lib/Button';
import './Navbar.css'
// import './Navbar.css'
 class TheNavbar extends Component {
     goHome=()=>{
         
         window.location='/';
     };
    
   goPricing=()=>{
    window.location='/pricing';
   }
     render(){
    return (
        <div classNames="navbar"> 
           
            <Navbar   fluid={true} toggleKey collapseOnSelect  fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a className="links" href='/'>
                    <p onClick={this.scrollToTop} className="links">
                    Cheapest Repairs
                    </p>
                    </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav  >
                    <NavItem style={{marginLeft:'50px',}} eventKey={1} >
                    Santa Monica Location
                    <br/>
                    1301 South Main St #210, Los Angeles, CA 90015
                    
                 
                       
                    </NavItem>
                   
                   
                    
                   
                    <NavItem eventKey={4} >
                    Los Angeles Location
                    <br/>
                    1301 South Main St #210, Los Angeles, CA 90015
                    
                    </NavItem>
                  
                    <NavItem pullRight eventKey={6} style={{marginLeft:'150px',marginRight:'30px'}}>
                    <Button  className='buttons'bsStyle="primary" bsSize="sm">
                    <Link  className='service' to="/service">
                       Book Service
                        </Link>
                       </Button>
                    </NavItem>
                    <NavItem pullRight eventKey={6} style={{margin:'0'}}>
                    <Button  className='buttons'bsStyle="primary" bsSize="sm">
                    <a onClick={this.goPricing} className='service' href="/pricing">
                       Pricing
                        </a>
                       </Button>
                    </NavItem>
                   
                   
                </Nav>
                </Navbar.Collapse>
            </Navbar>;
          
            
        </div>
    
    )
}
}
export default TheNavbar;
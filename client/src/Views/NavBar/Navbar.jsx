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
     scrollToTop=()=>{
         window.scrollTo(0,10);
         window.location='/';
     };
    
    scrollToEducation=()=>{
        window.scrollTo(0,1500);
        window.history.replaceState='/education';
    };
    scrollToClasswork=()=>{
        window.scrollTo(0,2335);
        window.history.replaceState='/classwork';
    };
    scrollToProjects=()=>{
        window.scrollTo(0,2800);
        window.history.replaceState='/projects';
    };
    scrollToAbout=()=>{
        window.scrollTo(0,3400);
        window.history.replaceState='/about';
    };
    scrollToContact=()=>{
        window.scrollTo(0,4000);
        window.history.replaceState='/contact';
    }
     render(){
    return (
        <div>
           
            <Navbar  classNames="navbar" fluid={true} toggleKey collapseOnSelect  fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link className="links" to="/" onClick={this.scrollToTop}>
                    <p className="links">
                    Cheapest Repairs
                    </p>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight style={{paddingLeft:'100px',paddingRight:'100px'}}>
                    <NavItem eventKey={1} >
                    
                    <DropdownButton eventKey={3} bsStyle='link' title='Santa Monica Location'>
                    <MenuItem eventKey="1"> 1301 South Main St #210, Los Angeles, CA 90015</MenuItem>
                    </DropdownButton>
                 
                       
                    </NavItem>
                   
                   
                    
                   
                    <NavItem eventKey={4} onClick={this.scrollToProjects}>

                    
                
           
                    <DropdownButton eventKey={3} bsStyle='link' title='Los Angeles Location'>
                    <MenuItem eventKey="1"> 1301 South Main St #210, Los Angeles, CA 90015</MenuItem>
                    </DropdownButton>


                   
                
                  
                    </NavItem>
                   
                    <NavItem eventKey={4} onClick={this.scrollToProjects}>
                    <Link to='projects'>

                    <p style={{color:'white'}}>lkemkgvkgnnnmjknm</p>

                        </Link>
                    </NavItem>   <NavItem eventKey={4} onClick={this.scrollToProjects}>
                    <Link to='projects'>
                    <p style={{color:'white'}}>lkemkgvkgnm</p>
                        </Link>
                    </NavItem>
                    <NavItem eventKey={6} onClick={this.scrollToContact} >
                    <Button  className='buttons'bsStyle="primary" bsSize="sm">
                    <Link  className='service' to="/service">
                       Book Service
                        </Link>
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
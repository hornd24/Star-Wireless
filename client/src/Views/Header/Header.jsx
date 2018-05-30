import React, {Component} from 'react';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import {Link} from 'react-router-dom';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import './Header.css'
import Iphone from './Images/iphone.png'
// import './Navbar.css'
 class Header extends Component {
    
     render(){
    return (
        <div className='head'> 
        <div className='Title'>
      <h1 > Amazing Repairs </h1><h1 className='for'>For An</h1><h1>  Amazing Price </h1>
      </div>
      
      <div className='info'>
<p > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    <div className='test'>
      <div className='Iphone'>
     
   
     </div>
     <div data-descr="ADD" className='text'>
     <p data-descr="ADD"> Before</p>
     </div>
     </div>
        </div>
    
    )
}
}
export default Header;
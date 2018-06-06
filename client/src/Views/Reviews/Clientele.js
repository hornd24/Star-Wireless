import React, {Component} from 'react';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import {Link} from 'react-router-dom';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Image from 'react-bootstrap/lib/Image';
import Phones from './Images/iphone2.png';
import Tablet from './Images/ipad.png';
import Mac from './Images/mac.png';
import Ipod from './Images/ipod.png';
import './Devices.css'
 class Clientele extends Component {
    
     render(){


    return (

        <Grid className='backr'>
        <Row className='top'>
            
            <Col lg={10}>
           <h2> What can we fix for you at the cheapest price?</h2>
            </Col>
            </Row>
            <Row>
            <Col className="devi " md={8} lg={12}>
<div className='group'>

           <Image  href='phones' src={Phones}  rounded responsive className="Phone" >
                          
                               </Image>
                               <br/>
                             <a className='link names' href='/phones'>   Phones</a>
                               <Image href='/tablets' src={Tablet} rounded  responsive className=" Tablet" >
                

                               </Image>
                        
                             <a  className='link names2' href='/tablets'>  Tablets</a>
                               <Image href='/computers' src={Mac} rounded  responsive className=" Mac" >
                

                </Image>
             
               <a  className='link names3' href='/computers'>  Computers</a>
               <Image href='/ipod' src={Ipod} rounded  responsive className="Ipod" >
                

                </Image>
                <a href='/ipod' className='links names4'>Ipods</a>
         </div>                   
                               

            </Col>
            </Row>
            <br/>  <br/>  <br/>
            <Row>
                <Col className='theInfo' lg={12}>
                <Thumbnail className='best' responsive style={{width:'300px',height:'250px'}} >
                <h4>Best Price Guarnteed</h4>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </Thumbnail>
                <Thumbnail responsive className='fast' style={{width:'300px',height:'250px'}} >
                <h4>Fastest Service Around</h4>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </Thumbnail>
                <Thumbnail responsive className='free' style={{width:'300px',height:'250px'}} >
                <h4>Free Diagnostics Check</h4>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </Thumbnail>
                <Thumbnail responsive className='warranty ' style={{width:'300px',height:'250px'}} >
                <h4>30 Day Warranty</h4>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </Thumbnail>
                </Col>
                </Row>
      
        </Grid>
    
    )
}
}
export default Clientele;
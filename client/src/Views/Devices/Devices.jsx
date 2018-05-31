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
import Phones from './Images/iphone2.png'
import Tablet from './Images/ipad.png'
import Mac from './Images/mac.png'
import './Devices.css'
 class Devices extends Component {
    
     render(){


    return (

        <Grid className='backr'>
        <Row className='top'>
            
            <Col lg={10}>
           <h2> What can we fix for you at the cheapest price?</h2>
            </Col>
            </Row>
            <Row>
            <Col className="devi " lg={12}>
<div className='group'>

           <Image  src={Phones}  rounded responsive className="Phone" >
                          
                               </Image>
                               <br/>
                             <a className='link names' href='/phones'>   Phones</a>
                               <Image  src={Tablet} rounded  responsive className=" Tablet" >
                

                               </Image>
                        
                             <a  className='link names2' href='tablets'>  Tablets</a>
                               <Image  src={Mac} rounded  responsive className=" Mac" >
                

                </Image>
             
               <a  className='link names3' href='/computers'>  Computers</a>
         </div>                   
                               

            </Col>
            </Row>
      
        </Grid>
    
    )
}
}
export default Devices;
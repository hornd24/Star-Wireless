import React, {Component} from 'react';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import {Link} from 'react-router-dom';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import Lightbox from 'react-images';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Image from 'react-bootstrap/lib/Image';
import Daniel from './Images/daniel.jpg';
 class Misson extends Component {
    
     render(){
       

    return (

        <Grid >
        <Row >
     <Col lg={5}>
     <Image width={454} height={480} src="http://via.placeholder.com/350x350"/>
    
     </Col>
    
     <Col lg={7}>
     <h1> Come in for the cheapest prices around!</h1>
     <br/>
     <p style={{fontSize:'17.6px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

     </Col>
    
                            </Row>
                            <Row className='top'>
     <Col lg={2}>
     </Col>
     <Col lg={1}>
     </Col>
     <Col lg={4}>
  

     </Col>
     <Col lg={4}>
     </Col>
            
                            </Row>
                            <Row style={{height:'20px'}}>
                            </Row>
                            <Row className='top'>
     <Col lg={2}>
     </Col>
     
     <Col lg={6}>
 
     </Col>
     <Col lg={4}>
     </Col>
            
                            </Row>

      
        </Grid>
    
    )
}
}
export default Misson;
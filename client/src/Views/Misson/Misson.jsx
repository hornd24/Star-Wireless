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

        <Grid className='backr'>
        <Row className='top'>
     <Col lg={4}>
     <Image width={254} height={280} src={Daniel}/>
    
     </Col>
     <Col lg={8}>
     <h1> Come on in for the cheapest prices around!</h1>
     <br/>
     <p style={{fontSize:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

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
                            <Row style={{height:'100px'}}>
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
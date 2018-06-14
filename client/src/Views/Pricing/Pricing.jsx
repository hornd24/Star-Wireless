import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import Lightbox from 'react-images';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Image from 'react-bootstrap/lib/Image';
import Samsung from './Images/tempered.png';
import Table from 'react-bootstrap/lib/Table';
import './Pricing.css'
import $ from "jquery";
 class Prcing extends Component {
    state={
        mobile:'false'
    }
    componentDidMount=()=>{
        if (window.matchMedia('(max-width: 767px)').matches) {
this.setState({
    mobile:'responsive'
})
        }
    }
     render(){
  const rep= this.state.mobile

    return (

        <Grid >
            <br/> <br/> <br/> <br/>
            <Row >
     <Col lg={5}>


    
     </Col>
     <Col lg={7}>
     <h1> Pricing</h1>
     </Col>
     </Row>
        <Row >
     <Col lg={3}>


    
     </Col>
    
     <Col lg={9}>
   
  
     <Image width={420} src={Samsung}/>
     <p style={{fontSize:'17.6px'}}></p>

     </Col>
    
                            </Row>
                            <Row >
                              <Col lg={2}>
                              </Col>
    
     <Col lg={5}>
     <div className='tableWrap'>
     
     <Table striped bordered condensed	 hover  className='tabless'>
     <thead>
    <tr>
      <th>Phone Model</th>
      <th>Screen repair</th>
      <th>LCD Repair</th>
      <th>Battery Replacment</th>
      <th>Wont Turn On</th>
      <th>Device Diagnostic</th>
      <th>Other</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Samsung</td>
      <td>$100</td>
      <td>$160</td>
      <td>$100</td>
      <td>$160</td>
      <td>$0</td>
      <td>$160</td>

    </tr>
    <tr>
   
      <td>IPhone</td>
      <td>$100</td>
      <td>$160</td>
      <td>$160</td>
      <td>$160</td>
      <td>$0</td>
      <td>$160</td>
    </tr>
    <tr>
     
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>;
</div>
     </Col>
     <Col lg={7}>
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
export default Prcing;
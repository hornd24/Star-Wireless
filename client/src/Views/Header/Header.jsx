import React, {Component} from 'react';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import {Link} from 'react-router-dom';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import './Header.css'
import BrokenIphone from './Images/cracked-iphone2.png'
import Iphone from './Images/iphone.png'
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ImageComparisonSlider from './ImageSlider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactCompareImage from 'react-compare-image';
// import './Navbar.css'


 class Header extends Component {
    
     render(){
        const Cracked_Iphone = BrokenIphone;
const Fixed_Iphone=Iphone;

    return (

        <Grid className='backr'>
        <div className='head'> 
        <Row>
            <Col lg={8}>
        <div className='Title'>
      <h1 > Amazing Repairs </h1><h1 className='for'>For An</h1><h1>  Amazing Price </h1>
      </div>
      </Col>
      <Col lg={4}>
      <div className='test'>

      <div className='Iphone'>

     
<ReactCompareImage className='ThePhone' handleSize={50} sliderLineWidth={10} leftImage={BrokenIphone} rightImage={Iphone} />;
</div>
  
     </div>
     </Col> 
      </Row>
      <Row>
          <Col lg={5}>
      <div className='info'>
<p > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
   </Col>
   </Row>
        </div>
        </Grid>
    
    )
}
}
export default Header;
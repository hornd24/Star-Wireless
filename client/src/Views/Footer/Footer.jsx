import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import FormGroup from 'react-bootstrap/lib/FormGroup';
 import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import {Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from "axios";
// import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css'
import Panel from 'react-bootstrap/lib/Panel'
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

import Image from 'react-bootstrap/lib/Image';
import Twitter from './Images/Twitter.png';
import Youtube from './Images/YouTube.png';
import Instagram from './Images/instagram.png';
import Facebook from './Images/facebook2.png'
class Footer extends Component {
    state={
       button:'home',
       name:'',
       email:'',
       comment:'',
       button:false,
       emailVal:false,
       nameVal:false,
       commentVal:false
        
    }
    handleChange=(e) =>{
        const name = e.target.name;
        const value = e.target.value;
         this.setState({ [name]: value })
      }
      onSubmit=()=>{
  
        axios.post("/api/contact/info", this.state)
        window.location='/thanks'
      }
    
    validationStateEmail(){
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       let email= re.test(String(this.state.email).toLowerCase());
         if (email === true) {
            
             return 'success'
         }
         
         else if (email ===false) return 'error';
         return null;
        }
    scrollToTop=()=>{
        window.scrollTo(0,10)
    }
   componentDidMount=(e) =>{
     
        
      }
     
      render(){
      
      
    return (
    <div className="row">
      <div className="col-lg-12">
        <div className="footer">
      
   
         <Panel  collapsible className="Panel">
           <Panel.Body className='panelBody'>
            <div className="row">
           
    <div className="col-lg-4">
    <h1 className='Company'>CheapestRepairs</h1>
                     
    </div>
    <div className="col-lg-4 types">
    <Grid className="contacts">
      <Row>
            <Col md={12}>
       
        <h4 className="Text ">GET OUR NEWSLETTER</h4>
        </Col>
        </Row>
                <Row>
            <Col md={12} >
            <FormGroup    bsSize={'xs'}  >
         
        <FormControl
        onChange={this.handleChange}
        className='thecontact'
                 id="formControlsName"
                name='name'
                type="text"
                // bsClass='thecontact'
                // label="Name"
                placeholder="Enter Your Email"
                value={this.state.name}
            />
            </FormGroup>
            <div className='labels'>
            <Button    disabled={this.state.button} onClick={this.onSubmit} bsStyle="success">Submit</Button>
           </div>
            </Col>
            </Row>
            
            <Row style={{height:'20px'}}>
          
          </Row>
           <Row>
           <Col className='' md={12}>
           
          
            </Col>
            </Row>
             </Grid>
    </div>
    <div className="col-lg-4 socialGroup" >
 <h4 className='Text'> FOLLOW US ON SOCIAL MEIDA</h4>
<div className='thesocial'>
    <Image className='Twitter between'  src={Twitter}>
            </Image>
            <Image className='Facebook between'  src={Facebook}>
            </Image>
            <Image className='Instagram between'  src={Instagram}>
            </Image>
            <Image className='Youtube between'  src={Youtube}>
            </Image>
            </div>
    </div>
   
   </div>
    <div className="row">
            
            <div className="col-lg-3">
          
           
            
            </div>
            
            <div className="col-lg-9 pictures">
       
            </div>
            
           </div>
      
   <div className="row">
            
            <div className="col-lg-4">
          
           
            
            </div>
            
            <div className="col-lg-4 copy">
            <footer>Copyright © 2018 CheapestRepairs</footer>
            </div>
            <div className='col-lg-4'>
            </div>
            
           </div>
      
         </Panel.Body>
  </Panel>
                    </div>
                </div>
            </div>
    )
}
}

export default Footer;
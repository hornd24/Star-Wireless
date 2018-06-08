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
import ReactPhotoGrid from 'react-photo-grid';
import Justin from './Images/justinbieber.jpg';
import Brown from './Images/chrisbrown.jpg';
import Pump from './Images/Lil_Pump.jpg';
import Sean from'./Images/seankingston.jpg';
import Stars from './Images/5.png';
import './Reviews.css'
 class Reviews extends Component {
    
     render(){
       

    return (

        <Grid className='backr'>
        <Row className='top'>
     
            <Col lg={2}>

            </Col>
            <Col lg={4}>
            <h1  clasName='Note' style={{position:'static'}}> Notable Clientele</h1>
            </Col>
            <Col lg={3}>
           
            </Col>
            </Row>
            <br/>
            <Row>
            <Col lg={3}>
        
        <Thumbnail src={Justin}/>
            </Col>
          <Col lg={3}>
          <Thumbnail src={Brown}/>
          </Col>
          <Col lg={3}>
          <Thumbnail  src={Pump}/>
          </Col>
          <Col lg={3}>
          <Thumbnail src={Sean}/>
          </Col>

                </Row>
                <Row>
                <Col lg={3}>
            <h3> Justin Bieber</h3>
                </Col>
              <Col lg={3}>
           <h3>Chris Brown</h3>
              </Col>
              <Col lg={3}>
             <h3>Lil Pump</h3>
              </Col>
              <Col lg={3}>
             <h3>Sean Kingston</h3>
              </Col>
    
                    </Row>
                    <Row clasName='theRow'>
                
   
                        </Row>
                      
                        <Row >
                        <br/> <br/>
                        <Col lg={5}>

                        </Col>
                        <Col lg={4}>
                        <h1  clasName='Note' style={{position:'static'}}> Reviews</h1>
                        </Col>
                        <Col lg={3}>
              
                        </Col>
                        </Row>
                       
                        <Row>
                        <Col lg={4}>
                        <div clasName='TheReviews'>
                  <Thumbnail  width={104} height={64}>
                
                  <h3 className='ReviewNames' >
                  Sauna C : Hawthorne, CA
                  </h3>
               
                  <img className='stars' alt='stars' src={Stars}/> <br/>
               <p className='ReviewText sauna'>   Thank you guys so much for fixing my phone fast and efficiently .. been coming to these guys for years and refer al of my friends! Daniel has always looked out for us with good prices and always hooking it up.</p>
                 
               </Thumbnail>
                  </div>
                        </Col>
                      <Col lg={4}>
                      <div clasName='TheReviews'>
                      <Thumbnail  width={64} height={64}>
                
                      <h3 className='ReviewNames' >
                      Gracie R : Santa Monica, CA
                      </h3>
                   
                      <img className='stars' alt='stars' src={Stars}/> <br/>
                   <p className='ReviewText '>  Gotta give this place 5 stars! 
                   Best customer service ever! 
                   Came in here with a iPhone 6S that was bent and broken screen, it was fixed real quick by the associate named Chris! He was quick and his work was efficient! Daniel came in and was fun and cool too talk to 
                   Will be recommending this place to others 
                   Good pricing as well!</p>
                      </Thumbnail>
                      </div>
                      </Col>
                      <Col lg={4}>
                      <Thumbnail clasName='TheReviews' width={64} height={64}>
                
                      <h3 className='ReviewNames' >
                      Juan V : South Los Angeles, Los Angeles, CA
                      </h3>
                   
                      <img className='stars' alt='stars' src={Stars}/> <br/>
                   <p className='ReviewText juan'> Great place to repair water damaged iPhones. Daniel is nice and really helpful. He can work miracles for less and all his work is guaranteed. He's an honest guy you can trust, I do for all my repair work.</p>
                     
                   </Thumbnail>
                      </Col>
                      
            
                            </Row>
      
        </Grid>
    
    )
}
}
export default Reviews;
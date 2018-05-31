import React,{Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import './app.scss'
import TheNavBar from './NavBar/Navbar'
import Header from './Header/Header'
import Devices from './Devices/Devices'
import { Parallax } from 'react-scroll-parallax';
class App extends Component {

  state={

  }

  render(){
    return(
<BrowserRouter>
  <div className="app">
   
<TheNavBar/>
<Parallax
        className="TheHeader"
        offsetYMax={20}
        offsetYMin={-40}
        slowerScrollRate
        tag="figure"
    >
<Header className='Header'/>
</Parallax>

<Parallax
        className="Devices"
        offsetYMax={70}
        offsetYMin={-10}
        slowerScrollRate
        tag="figure"
    >
<Devices className='devicess'/>
</Parallax>
    {/* <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/> */}
  </div>
</BrowserRouter>
    )
  }
  }

  export default App;
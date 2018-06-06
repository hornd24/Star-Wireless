import React,{Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import './app.scss'
import TheNavBar from './NavBar/Navbar'
import Header from './Header/Header'
import Devices from './Devices/Devices'
import Reviews from './Reviews/Reviews'
import { Parallax } from 'react-scroll-parallax';
import Misson from './Misson/Misson';
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
        offsetYMax={100}
        offsetYMin={-10}
        slowerScrollRate
        tag="figure"
    >
<Devices className='devicess'/>
</Parallax>
<Parallax
        className="Reviews"
        offsetYMax={-15}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
<Reviews className='TheReviews'/>
</Parallax>
<Parallax
        className="Misson"
        offsetYMax={40}
        offsetYMin={-5}
        slowerScrollRate
        tag="figure"
    >
<Misson className='Statement'/>
</Parallax>
    {/* <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/> */}
  </div>
</BrowserRouter>
    )
  }
  }

  export default App;
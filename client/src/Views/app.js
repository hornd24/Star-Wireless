import React,{Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import './app.scss'
import TheNavBar from './NavBar/Navbar'


class App extends Component {

  state={

  }

  render(){
    return(
<BrowserRouter>
  <div className="app">
   
<TheNavBar/>
    {/* <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/> */}
  </div>
</BrowserRouter>
    )
  }
  }

  export default App;
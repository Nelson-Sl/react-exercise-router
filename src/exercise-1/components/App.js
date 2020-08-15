import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home'
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <nav className="navigation">
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/my-profile'>My Profile</Link>
            <Link className='navLink' to='/about-us'>About Us</Link>
          </nav>
          <Switch>
            <Route path='/about-us' component={AboutUs}/>
            <Route path='/my-profile' component={MyProfile}/>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

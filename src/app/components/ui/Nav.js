import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Search from './Search'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <div className='header'>  
            <nav className='navbar navbar-collapse navbar-expand-sm'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/search'>Search</NavLink>
            </nav>
          </div>
          <div className="content mt-8 text-center">
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/search' component={Search}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default Nav
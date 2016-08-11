import React from 'react'
import { Link, IndexLink } from 'react-router' 
import NavLink from './js/components/NavLink'
import Home from './js/pages/Home'

var navbar = {
	background: "gray",
};

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Marks Website</h1>
        <div style={navbar}>
	        <ul role="nav">
	          <li><NavLink to="/about">About</NavLink></li>
	          <li><NavLink to="/repos">Repos</NavLink></li>
	          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
	        </ul>
        </div>
        {}
        {this.props.children}
      </div>
    )
  }
})

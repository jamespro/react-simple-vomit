import React, { Component } from 'react';  // import react and react component object - so we can extend it - destructure Component with curly braces
import './Header.css'; // CSS for Header

class Header extends Component {// define the Header class, extending Component class
  render() { //render element
    const style = { // defining the style using a custom object 
      width: this.props.width, // passing in the width via props from App
      backgroundColor: this.props.backColor // passing in the backgroundcolor via props 
    }
    return ( // returning the element 'header'
        <header style={style} className="Header-main">
        {/* // header has inline styles */}
        {/* // styles passed in as an object originally from the props defined in App */}
        </header>

    );
  }
}

export default Header; // export Header component


//document.querySelector("header").style.backgroundColor = "red"

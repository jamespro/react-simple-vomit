import React, { Component } from 'react';// import react and react component object - so we can extend it - destructure Component with curly braces
import './Footer.css'; //CSS for Footer

class Footer extends Component { // define Footer class, extending component
  render() { //render Footer element
    return ( 
        <footer className="Footer">
            {/* return footer element */}
        </footer>

    );
  }
}

export default Footer; // export Footer component

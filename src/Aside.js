import React, { Component } from 'react';// import react and react component object - so we can extend it - destructure Component with curly braces
import './Aside.css'; // CSS for Aside

class Aside extends Component {// define SectionMain class, extending Component
  render() { //render a section element for Aside
    return (
        <aside className="Aside">
        </aside>

    );
  }
}

export default Aside; //export Aside component

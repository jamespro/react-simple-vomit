import React, { Component } from 'react';  // import react and react component object - so we can extend it - destructure Component with curly braces
import './SectionMain.css'; // CSS for SectionMain

class SectionMain extends Component { // define SectionMain class, extending Component
  render() { // render a section element for SectionMain
    return (
        <section className="SectionMain"> {/* return SectionMain element */}
        </section>

    );
  }
}

export default SectionMain; //export SectionMain component

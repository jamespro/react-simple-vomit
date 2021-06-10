import React, { Component } from 'react'; // import react and react component object - so we can extend it - destructure Component with curly braces
import './App.css'; // overall css for the app
import Header from './Header'; // import Header component
import SectionMain from './SectionMain'; // import SectionMain component
import Aside from './Aside'; // import Aside component
import Footer from './Footer'; // import Footer component

// 
class App extends Component { // create the App, extending Component class

  render() {
      return (
        // assign class to primary div
      <div className="App">
        {/* Header component with back-color and width */}
            <Header backColor="green" width="50%"></Header>
        {/* SectionMain compontent */}
              <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

// export App component
export default App; 

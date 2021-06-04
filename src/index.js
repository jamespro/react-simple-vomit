import React from 'react';  // import React
import ReactDOM from 'react-dom'; //import ReactDom
import './index.css'; // css file
import App from './App'; // import the entire App 
import registerServiceWorker from './registerServiceWorker'; // testing


ReactDOM.render(<App />, document.getElementById('root')); //render our App component, going to use the element with id="root"
registerServiceWorker(); // testing

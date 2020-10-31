import React from 'react';
import './components/Wrapper.css';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <!-- your component goes here to test the rendering! --> */}
      <Wrapper data-testid="wrapper-component" />
    </div>
  );
}

export default App;

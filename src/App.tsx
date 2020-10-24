import React from 'react';
import logo from './logo.svg';
import './App.css';

import { CardText } from "./components/CardText/CardText";

function App() {
  return (
    <div className="App">
      {/* your component goes here to test the rendering! */}
      <CardText
        publisher="Atlas Obscura"
        author="Sarah Lascow"
        url="https://www.atlasobscura.com/articles/colonial-india-british-hedge-salt-tax"
        title="The British Once Built a 1,100-Mile Hedge Through the Middle of India"
        shortDesc="This quixotic colonial barrier was meant to enforce taxes."
      />
    </div>
  );
}

export default App;

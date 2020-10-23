import React from 'react';
//import logo from './logo.svg';
import './App.css';
import PocketCard from './components/Card/Card';

function App() {
    return (
        <div className="App">
            {/* <!-- your component goes here to test the rendering! --> */}
            <PocketCard imagePath="/pocket-shield@2x.png" />
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import { MainContentWrapper } from './components/MainContentWrapper/MainContentWrapper';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContentWrapper>
        <h1>Hello World!</h1>
      </MainContentWrapper>
    </div>
  );
}

export default App;

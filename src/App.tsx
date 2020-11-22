import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TabsNavigation from './components/TabsNavigation/TabsNavigation';
import PocketCustomTab from './components/TabsNavigation/Tab';

function App() {
  return (
    <div className="App">
      {/* <!-- your component goes here to test the rendering! --> */}
      <TabsNavigation>
        <PocketCustomTab title="Prospects" badge="3333" />
        <PocketCustomTab title="Snoozed" badge="222" />
        <PocketCustomTab title="Approved" badge="11" />
        <PocketCustomTab title="Rejected" badge="0" />
      </TabsNavigation>
      <TabsNavigation>
        <PocketCustomTab title="Live" badge="0" />
        <PocketCustomTab title="Scheduled" badge="1" />
      </TabsNavigation>
    </div>
  );
}

export default App;

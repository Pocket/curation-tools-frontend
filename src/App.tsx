import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TabsNavigation from './components/TabsNavigation/TabsNavigation';

function App() {
    return (
        <div className="App">
            {/* <!-- your component goes here to test the rendering! --> */}
            <TabsNavigation>
                {[
                    {
                        NameTab: 'Prospects',
                        BadgeTab: 99,
                    },
                    {
                        NameTab: 'Snoozed',
                        BadgeTab: 0,
                    },
                    {
                        NameTab: 'Approved',
                        BadgeTab: 5,
                    },
                    {
                        NameTab: 'Rejected',
                        BadgeTab: 9999,
                    },
                ]}
            </TabsNavigation>
            <TabsNavigation>
                {[
                    {
                        NameTab: 'Live',
                        BadgeTab: 99,
                    },
                    {
                        NameTab: 'Scheduled',
                        BadgeTab: 0,
                    },
                ]}
            </TabsNavigation>
        </div>
    );
}

export default App;

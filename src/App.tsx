import React from 'react';

import { Header } from './components/Header/Header';
import { MainContentWrapper } from './components/MainContentWrapper/MainContentWrapper';
import { TabNavigation } from './components/TabNavigation/TabNavigation';
import { Tab } from './components/Tab/Tab';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <MainContentWrapper>
        <TabNavigation>
          <Tab label="Live" articleCount={123} />
          <Tab label="Scheduled" articleCount={345} />
        </TabNavigation>
      </MainContentWrapper>
    </div>
  );
}

export default App;

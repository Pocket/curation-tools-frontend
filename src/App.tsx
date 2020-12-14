import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import { MainContentWrapper } from './components/MainContentWrapper/MainContentWrapper';
import { Header } from './components/Header/Header';

import { AddStoryPage } from './pages/AddStoryPage';
import { HomePage } from './pages/HomePage';
import { NewTabLivePage } from './pages/newtab/NewTabLivePage';
import { ProspectsListPage } from './pages/prospects/ProspectsListPage';

function App(): JSX.Element {
  // hardcoding feed for now
  const feed = 'en_US';

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header feed={feed} />
        <MainContentWrapper>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/:feed/prospects/">
              <ProspectsListPage />
            </Route>
            <Route path="/:feed/prospects/article/add/">
              <AddStoryPage />
            </Route>
            <Route path="/:feed/newtab/">
              <NewTabLivePage />
            </Route>
          </Switch>
        </MainContentWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

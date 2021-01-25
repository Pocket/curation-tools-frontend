import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

// API
import { client } from './services/clients/AwsAppSync';
import { ApolloProvider, useQuery } from '@apollo/client';
import {
  getCurrentFeed,
  FeedData,
  FeedVariables,
} from './services/queries/getCurrentFeed';

// custom components
import { Header } from './components/Header/Header';
import { MainContentWrapper } from './components/MainContentWrapper/MainContentWrapper';
import { HandleApiResponse } from './components/HandleApiResponse/HandleApiResponse';

// pages
import { AddStoryPage } from './pages/AddStoryPage/AddStoryPage';
import { HomePage } from './pages/HomePage';
import { NewTabPage } from './pages/NewTabPage/NewTabPage';
import { ProspectsPage } from './pages/ProspectsPage/ProspectsPage';
import { EditAndApproveStoryPage } from './pages/EditAndApproveStoryPage/EditAndApproveStoryPage';

function App(): JSX.Element {
  /**
   * I am assuming the authenticated user arrives "knowing" which
   * feed is the default one for them (currentFeed: string).
   *
   * It would be brilliant if they already arrived with a Feed object (id, name),
   * but for now I'm hardcoding the 'en-US' feed as the default one unless
   * another feed has been provided in the URL.
   */

  // extract feed name if user goes straight to a subpage, i.e. /de-DE/prospects/
  let feedName = window.location.pathname.split('/')[1];

  // provide a temporary fallback option
  feedName =
    feedName.length && ['en-US', 'en-GB', 'de-DE'].includes(feedName)
      ? feedName
      : 'en-US';

  // get feed object from the API
  const { loading, error, data } = useQuery<FeedData, FeedVariables>(
    getCurrentFeed,
    {
      client,
      variables: { name: feedName },
    }
  );

  const currentFeed = data?.currentFeed.items[0];

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {!data && (
            <HandleApiResponse
              loading={loading}
              error={error}
              useModal
              loadingText="Loading..."
            />
          )}
          {data && (
            <>
              <Header feed={currentFeed} />
              <MainContentWrapper>
                <Switch>
                  <Route exact path="/">
                    <HomePage feed={currentFeed} />
                  </Route>
                  <Route exact path="/:feed/prospects/">
                    <ProspectsPage feed={currentFeed} />
                  </Route>
                  <Route
                    exact
                    path="/:feed/prospects/(snoozed|approved|rejected)/"
                  >
                    <ProspectsPage feed={currentFeed} />
                  </Route>
                  <Route exact path="/:feed/prospects/article/add/">
                    <AddStoryPage feed={currentFeed} />
                  </Route>
                  <Route
                    exact
                    path="/:feed/prospects/article/:articleid/edit-and-approve/"
                  >
                    <EditAndApproveStoryPage />
                  </Route>
                  <Route path="/:feed/newtab/">
                    <NewTabPage />
                  </Route>
                  <Route path="*">
                    <HomePage feed={currentFeed} />
                  </Route>
                </Switch>
              </MainContentWrapper>
            </>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

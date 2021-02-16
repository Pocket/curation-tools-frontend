import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import {
  AddStoryPage,
  EditAndApproveStoryPage,
  HomePage,
  NewTabPage,
  ProspectsPage,
} from './pages';
import { HandleApiResponse, Header, MainContentWrapper } from './components';
import { client, useGetCurrentFeed } from './api';

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
  const { loading, error, data } = useGetCurrentFeed(
    { name: feedName },
    client
  );

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
              <Header feed={data} />
              <MainContentWrapper>
                <Switch>
                  <Route exact path="/">
                    <HomePage feed={data} />
                  </Route>
                  <Route path="/:feed/prospects/:type(snoozed|approved|rejected)/">
                    <ProspectsPage feed={data} />
                  </Route>
                  <Route exact path="/:feed/prospects/add/">
                    <AddStoryPage feed={data} />
                  </Route>
                  <Route
                    exact
                    path="/:feed/prospects/:prospectid/edit-and-approve/"
                  >
                    <EditAndApproveStoryPage />
                  </Route>
                  <Route path="/:feed/prospects/">
                    <ProspectsPage feed={data} />
                  </Route>
                  <Route path="/:feed/newtab/">
                    <NewTabPage />
                  </Route>
                  <Route path="*">
                    <HomePage feed={data} />
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

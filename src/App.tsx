import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import { Header } from './components/Header/Header';
import { MainContentWrapper } from './components/MainContentWrapper/MainContentWrapper';
import { EditAndApproveStory } from './components/EditAndApproveStory/EditAndApproveStory';
import { AddStory } from './components/AddStory/AddStory';
import { Card } from './components/Card/Card';
import { LoginForm } from './components/LoginForm/LoginForm';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <MainContentWrapper>
          <EditAndApproveStory
            publisher="Test publisher"
            author="Test author"
            url="https://getpocket.com"
            title="Test title"
            excerpt="This is a short description."
            altText="Test alt text"
            thumbnailUrl="https://assets.getpocket.com/web/yir/2020/images/mostread-1@2x.d849a2bbcf7ce894c8e5d01bc6a73052.jpg"
            source="Syndication"
            topic="Health"
          />

          <AddStory />

          <Card
            thumbnailUrl={
              'https://assets.getpocket.com/web/yir/2020/images/mostread-1@2x.d849a2bbcf7ce894c8e5d01bc6a73052.jpg'
            }
            title={'This is an article'}
            altText={'Alt text'}
          />
        </MainContentWrapper>

        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;

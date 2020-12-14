import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;

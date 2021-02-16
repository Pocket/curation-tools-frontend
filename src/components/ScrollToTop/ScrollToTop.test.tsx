import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ScrollToTop } from './ScrollToTop';

describe('The ScrollToTop component', () => {
  it('scrolls to the top on moving from page to page', () => {
    const history = createMemoryHistory();

    window.scrollTo = jest.fn();

    render(
      <Router history={history}>
        <ScrollToTop />
      </Router>
    );

    // move to another page
    history.push('/prospects/?page=2');

    expect(window.scrollTo).toHaveBeenCalled();
  });
});

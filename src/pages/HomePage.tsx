import React from 'react';
import { Redirect } from 'react-router-dom';

export const HomePage = (): JSX.Element => {
  // hardcoding feed for now
  const feed = 'en_US';

  return <Redirect to={`/${feed}/prospects/`} />;
};

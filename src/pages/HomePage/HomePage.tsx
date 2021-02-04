import React from 'react';
import { Redirect } from 'react-router-dom';
import { Feed } from '../../models';

/**
 * Home Page
 *
 * Currently empty and redirects to /:feed/prospects/.
 *
 * @param feed: Feed
 */
export const HomePage = ({ feed }: { feed: Feed | undefined }): JSX.Element => {
  return <Redirect push to={`/${feed?.name}/prospects/`} />;
};

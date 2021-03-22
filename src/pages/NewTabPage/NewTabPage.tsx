import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  CustomTabType,
  ScrollToTop,
  TabContents,
  TabSet,
} from '../../components';
import { Feed, ProspectVariables } from '../../models';
import { RECORDS_ON_PAGE } from '../../constants';
import { useGetLiveProspects, useGetScheduledProspects } from '../../api';

/**
 * New Tab page
 *
 * This page loads two tabs with live and scheduled articles.
 *
 * @param feed
 */
export const NewTabPage = ({
  feed,
}: {
  feed: Feed | undefined;
}): JSX.Element => {
  const { pathname } = useLocation();

  /**
   * Set the value of the active tab to path name,
   * i.e "/prospects/live/" if the "Live" tab is active.
   */
  const [value, setValue] = useState<string>(pathname);

  // switch to active tab when user clicks on tab heading
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: string
  ): void => {
    setValue(newValue);
  };

  // set base path for tab links
  const basePath = `/${feed?.name}/newtab/`;

  // set feed id (this should always be available)
  const feedId = feed?.id ?? 'none';

  // What tab are we on?
  // The default tab is for live prospects.
  let tabType = 'live';

  // All other tabs have their type spelled out in the pathname, let's use that
  const params = useParams<{ feed: string; type: string }>();
  if ('type' in params) {
    tabType = params.type;
  }

  // Determine what page we're on pagination-wise
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  // Use an extra variable as TypeScript won't allow a parseInt() call
  // on a possible null value
  const pageParam = query.get('page');
  const currentPage = pageParam ? parseInt(pageParam) : 1;

  // Work out which queries to call with which variables, since we fetch data
  // for all four tabs on first load.
  const defaultTabVars: ProspectVariables = {
    feedId,
    page: 1,
    perPage: RECORDS_ON_PAGE,
  };

  const paginatedTabVars: ProspectVariables = {
    ...defaultTabVars,
    page: currentPage,
  };

  // Load live prospects
  const {
    loading: loadingLive,
    error: errorLive,
    data: liveProspects,
  } = useGetLiveProspects(
    tabType === 'live' ? paginatedTabVars : defaultTabVars
  );

  // Load scheduled prospects
  const {
    loading: loadingScheduled,
    error: errorScheduled,
    data: scheduledProspects,
  } = useGetScheduledProspects(
    tabType === 'scheduled' ? paginatedTabVars : defaultTabVars
  );

  // Define the set of tabs that we're going to show on this page
  const tabs: CustomTabType[] = [
    {
      count: liveProspects?.meta.totalResults,
      label: 'Live',
      pathname: `${basePath}live/`,
    },
    {
      count: scheduledProspects?.meta.totalResults,
      label: 'Scheduled',
      pathname: `${basePath}scheduled/`,
    },
  ];

  return (
    <>
      <ScrollToTop />
      <TabSet currentTab={value} handleChange={handleChange} tabs={tabs} />

      <TabContents
        basePath={basePath}
        currentTab={value}
        heading="Live"
        tabPath={`${basePath}live/`}
        type="live"
        loading={loadingLive}
        error={errorLive}
        data={liveProspects}
      />

      <TabContents
        basePath={basePath}
        currentTab={value}
        heading="Scheduled"
        tabPath={`${basePath}scheduled/`}
        type="scheduled"
        loading={loadingScheduled}
        error={errorScheduled}
        data={scheduledProspects}
      />
    </>
  );
};

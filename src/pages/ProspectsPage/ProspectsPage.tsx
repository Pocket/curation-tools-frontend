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
import {
  useGetPendingProspects,
  useGetSnoozedProspects,
  useGetRejectedProspects,
  useGetApprovedProspects,
} from '../../api';

/**
 * Prospects page
 *
 * This page loads four tabs with pending, snoozed, approved and rejected articles.
 *
 * @param feed
 */
export const ProspectsPage = ({
  feed,
}: {
  feed: Feed | undefined;
}): JSX.Element => {
  const { pathname } = useLocation();

  /**
   * Set the value of the active tab to path name,
   * i.e "/prospects/approved/" if the "Approved" tab is active.
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
  const basePath = `/${feed?.name}/prospects/`;

  // set feed id (this should always be available)
  const feedId = feed?.id ?? 'none';

  // What tab are we on?
  // The default tab is for pending prospects. It doesn't have its type in the pathname
  let tabType = 'pending';

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

  // Load pending prospects
  const {
    loading: loadingPending,
    error: errorPending,
    data: pendingProspects,
  } = useGetPendingProspects(
    tabType === 'pending' ? paginatedTabVars : defaultTabVars
  );

  // Load snoozed prospects
  const {
    loading: loadingSnoozed,
    error: errorSnoozed,
    data: snoozedProspects,
  } = useGetSnoozedProspects(
    tabType === 'snoozed' ? paginatedTabVars : defaultTabVars
  );

  // Load snoozed prospects
  const {
    loading: loadingApproved,
    error: errorApproved,
    data: approvedProspects,
  } = useGetApprovedProspects(
    tabType === 'approved' ? paginatedTabVars : defaultTabVars
  );

  // Load rejected prospects
  const {
    loading: loadingRejected,
    error: errorRejected,
    data: rejectedProspects,
  } = useGetRejectedProspects(
    tabType === 'rejected' ? paginatedTabVars : defaultTabVars
  );

  // Define the set of tabs that we're going to show on this page
  const tabs: CustomTabType[] = [
    {
      count: pendingProspects?.meta.totalResults,
      label: 'Prospects',
      pathname: basePath,
    },
    {
      count: snoozedProspects?.meta.totalResults,
      label: 'Snoozed',
      pathname: `${basePath}snoozed/`,
    },
    {
      count: approvedProspects?.meta.totalResults,
      label: 'Approved',
      pathname: `${basePath}approved/`,
    },
    {
      count: rejectedProspects?.meta.totalResults,
      label: 'Rejected',
      pathname: `${basePath}rejected/`,
    },
  ];

  return (
    <>
      <ScrollToTop />
      <TabSet currentTab={value} handleChange={handleChange} tabs={tabs} />

      <TabContents
        basePath={basePath}
        currentTab={value}
        heading="Prospects"
        tabPath={basePath}
        type="pending"
        loading={loadingPending}
        error={errorPending}
        data={pendingProspects}
      />

      <TabContents
        basePath={basePath}
        currentTab={value}
        heading="Snoozed"
        tabPath={`${basePath}snoozed/`}
        type="snoozed"
        loading={loadingSnoozed}
        error={errorSnoozed}
        data={snoozedProspects}
      />

      <TabContents
        basePath={basePath}
        currentTab={value}
        heading="Approved"
        tabPath={`${basePath}approved/`}
        type="approved"
        loading={loadingApproved}
        error={errorApproved}
        data={approvedProspects}
      />

      <TabContents
        basePath={basePath}
        currentTab={value}
        heading="Rejected"
        tabPath={`${basePath}rejected/`}
        type="rejected"
        loading={loadingRejected}
        error={errorRejected}
        data={rejectedProspects}
      />
    </>
  );
};

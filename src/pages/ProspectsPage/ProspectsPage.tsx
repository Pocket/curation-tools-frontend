import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';
import {
  Card,
  HandleApiResponse,
  ScrollToTop,
  Tab,
  TabNavigation,
  TabPanel,
} from '../../components';
import { Feed, Prospect, ProspectVariables } from '../../models';
import { RECORDS_ON_PAGE } from '../../constants';
import {
  useGetPendingProspects,
  useGetSnoozedProspects,
  useGetRejectedProspects,
  useGetApprovedProspects,
} from '../../api';
import { Grid } from '@material-ui/core';

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
  ) => {
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

  return (
    <>
      <ScrollToTop />
      <TabNavigation value={value} onChange={handleChange}>
        <Tab
          count={pendingProspects?.meta.totalResults}
          label="Prospects"
          value={basePath}
          to={basePath}
        />
        <Tab
          count={snoozedProspects?.meta.totalResults}
          label="Snoozed"
          value={`${basePath}snoozed/`}
          to={`${basePath}snoozed/`}
        />
        <Tab
          count={approvedProspects?.meta.totalResults}
          label="Approved"
          value={`${basePath}approved/`}
          to={`${basePath}approved/`}
        />
        <Tab
          count={rejectedProspects?.meta.totalResults}
          label="Rejected"
          value={`${basePath}rejected/`}
          to={`${basePath}rejected/`}
        />
      </TabNavigation>

      <TabPanel heading="Prospects" value={value} index={basePath}>
        {!pendingProspects && (
          <HandleApiResponse loading={loadingPending} error={errorPending} />
        )}
        {pendingProspects &&
          pendingProspects.data?.map((prospect: Prospect) => {
            return (
              <Card
                key={prospect.id}
                prospect={prospect}
                type="pending"
                url={`${basePath}${prospect.id}/`}
              />
            );
          })}

        {pendingProspects && (
          <Grid container justify="center">
            <Grid item>
              <Pagination
                count={Math.ceil(
                  pendingProspects.meta.totalResults / RECORDS_ON_PAGE
                )}
                color="primary"
                defaultPage={tabType === 'pending' ? currentPage : 1}
                shape="rounded"
                size="large"
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`${basePath}pending/${
                      item.page === 1 ? '' : `?page=${item.page}`
                    }`}
                    {...item}
                  />
                )}
              />
            </Grid>
          </Grid>
        )}
      </TabPanel>

      <TabPanel heading="Snoozed" value={value} index={`${basePath}snoozed/`}>
        {!snoozedProspects && (
          <HandleApiResponse loading={loadingSnoozed} error={errorSnoozed} />
        )}
        {snoozedProspects &&
          snoozedProspects.data?.map((prospect: Prospect) => {
            return (
              <Card
                key={prospect.id}
                prospect={prospect}
                type="snoozed"
                url={`${basePath}${prospect.id}/`}
              />
            );
          })}
      </TabPanel>

      <TabPanel heading="Approved" value={value} index={`${basePath}approved/`}>
        {!approvedProspects && (
          <HandleApiResponse loading={loadingApproved} error={errorApproved} />
        )}
        {approvedProspects &&
          approvedProspects.data?.map((prospect: Prospect) => {
            return (
              <Card
                key={prospect.id}
                prospect={prospect}
                type="approved"
                url={`${basePath}${prospect.id}/`}
              />
            );
          })}
      </TabPanel>

      <TabPanel heading="Rejected" value={value} index={`${basePath}rejected/`}>
        {!rejectedProspects && (
          <HandleApiResponse loading={loadingRejected} error={errorRejected} />
        )}
        {rejectedProspects &&
          rejectedProspects.data?.map((prospect: Prospect) => {
            return (
              <Card
                key={prospect.id}
                prospect={prospect}
                type="rejected"
                url={`${basePath}${prospect.id}/`}
              />
            );
          })}
      </TabPanel>
    </>
  );
};

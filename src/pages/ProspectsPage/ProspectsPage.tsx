import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Card,
  HandleApiResponse,
  Tab,
  TabNavigation,
  TabPanel,
} from '../../components';
import { Feed, Prospect } from '../../models';
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
  ) => {
    setValue(newValue);
  };

  // set base path for tab links
  const basePath = `/${feed?.name}/prospects/`;

  // set feed id (this should always be available)
  const feedId = feed?.id ?? 'none';

  // Load pending prospects
  const {
    loading: loadingPending,
    error: errorPending,
    data: pendingProspects,
  } = useGetPendingProspects({
    feedId,
    page: 1,
    perPage: RECORDS_ON_PAGE,
  });

  // Load snoozed prospects
  const {
    loading: loadingSnoozed,
    error: errorSnoozed,
    data: snoozedProspects,
  } = useGetSnoozedProspects({
    feedId,
    page: 1,
    perPage: RECORDS_ON_PAGE,
  });

  // Load snoozed prospects
  const {
    loading: loadingApproved,
    error: errorApproved,
    data: approvedProspects,
  } = useGetApprovedProspects({
    feedId,
    page: 1,
    perPage: RECORDS_ON_PAGE,
  });

  // Load rejected prospects
  const {
    loading: loadingRejected,
    error: errorRejected,
    data: rejectedProspects,
  } = useGetRejectedProspects({
    feedId,
    page: 1,
    perPage: RECORDS_ON_PAGE,
  });

  return (
    <>
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
                url={`${basePath}${prospect.id}/`}
              />
            );
          })}
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
                url={`${basePath}${prospect.id}/`}
              />
            );
          })}
      </TabPanel>
    </>
  );
};

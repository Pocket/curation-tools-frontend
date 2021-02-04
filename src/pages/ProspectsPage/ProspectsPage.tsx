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
import { useGetPendingProspects } from '../../api';

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

  // prepare query for the first tab
  const { loading, error, data: pendingProspects } = useGetPendingProspects({
    feedId: feed?.id ?? 'none',
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
          label="Snoozed"
          value={`${basePath}snoozed/`}
          to={`${basePath}snoozed/`}
        />
        <Tab
          label="Approved"
          value={`${basePath}approved/`}
          to={`${basePath}approved/`}
        />
        <Tab
          label="Rejected"
          value={`${basePath}rejected/`}
          to={`${basePath}rejected/`}
        />
      </TabNavigation>
      {!pendingProspects && (
        <HandleApiResponse loading={loading} error={error} />
      )}
      {pendingProspects && (
        <TabPanel heading="Prospects" value={value} index={basePath}>
          {pendingProspects.data?.map((prospect: Prospect) => {
            return (
              <Card
                key={prospect.id}
                prospect={prospect}
                url={`${basePath}${prospect.id}/`}
              />
            );
          })}
        </TabPanel>
      )}

      <TabPanel heading="Snoozed" value={value} index={`${basePath}snoozed/`}>
        <p>Coming soon...</p>
      </TabPanel>

      <TabPanel heading="Approved" value={value} index={`${basePath}approved/`}>
        <p>Coming soon...</p>
      </TabPanel>

      <TabPanel heading="Rejected" value={value} index={`${basePath}rejected/`}>
        <p>Coming soon...</p>
      </TabPanel>
    </>
  );
};

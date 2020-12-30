import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import {
  getPendingProspects,
  ProspectData,
  ProspectVariables,
} from '../../services/queries/getPendingProspects';
import { Feed } from '../../services/types/Feed';
import { Prospect } from '../../services/types/Prospect';

import { TabNavigation } from '../../components/TabNavigation/TabNavigation';
import { Tab } from '../../components/Tab/Tab';
import { TabPanel } from '../../components/TabPanel/TabPanel';
import { HandleApiResponse } from '../../components/HandleApiResponse/HandleApiResponse';
import { Card } from '../../components/Card/Card';

/**
 * Prospects page
 *
 * This page loads four tabs with pending, snoozed, approved and rejected articles.
 *
 * @param feed
 */
export const ProspectsListPage = ({
  feed,
}: {
  feed: Feed | undefined;
}): JSX.Element => {
  const { pathname } = useLocation();

  /**
   * Set the value of the active tab to path name,
   * i.e "/prospects/approved/" if the "Approved" tab is active.
   */
  const [value, setValue] = useState(pathname);

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
  const [getProspects, { loading, error, data, called }] = useLazyQuery<
    ProspectData,
    ProspectVariables
  >(getPendingProspects, {
    variables: {
      feedId: feed?.id ?? 'none',
      limit: 50,
    },
  });

  // load data for the first tab only once that tab is active
  if (pathname === basePath && !called) {
    getProspects();
  }

  return (
    <>
      <TabNavigation value={value} onChange={handleChange}>
        <Tab
          count={data?.total.items.length}
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
      <HandleApiResponse loading={loading} error={error}>
        <TabPanel heading="Prospects" value={value} index={basePath}>
          {data?.listProspects.items.map((prospect: Prospect) => {
            return <Card key={prospect.id} prospect={prospect} />;
          })}
        </TabPanel>
      </HandleApiResponse>

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

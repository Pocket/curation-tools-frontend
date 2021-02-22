import * as localAPI from './local';
import * as awsAPI from './aws-appsync';

const client = process.env.REACT_APP_USE_POCKET_API
  ? awsAPI.client
  : localAPI.client;

const useGetCurrentFeed = process.env.REACT_APP_USE_POCKET_API
  ? awsAPI.useGetCurrentFeed
  : localAPI.useGetCurrentFeed;

const useGetPendingProspects = process.env.REACT_APP_USE_POCKET_API
  ? awsAPI.useGetPendingProspects
  : localAPI.useGetPendingProspects;

const useGetSnoozedProspects = localAPI.useGetSnoozedProspects;
const useGetRejectedProspects = localAPI.useGetRejectedProspects;
const useGetApprovedProspects = localAPI.useGetApprovedProspects;
const useSnoozeProspect = localAPI.useSnoozeProspect;
const useRejectProspect = localAPI.useRejectProspect;
const getRefetchParams = localAPI.getRefetchParams;

const useCreateProspectByUrl = process.env.REACT_APP_USE_POCKET_API
  ? awsAPI.useCreateProspectByUrl
  : awsAPI.useCreateProspectByUrl;

const useApproveProspect = process.env.REACT_APP_USE_POCKET_API
  ? awsAPI.useApproveProspect
  : awsAPI.useApproveProspect;

export {
  client,
  useGetCurrentFeed,
  useGetPendingProspects,
  useGetSnoozedProspects,
  useGetRejectedProspects,
  useGetApprovedProspects,
  useCreateProspectByUrl,
  useSnoozeProspect,
  useApproveProspect,
  useRejectProspect,
  getRefetchParams,
};

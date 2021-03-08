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
const useGetLiveProspects = localAPI.useGetLiveProspects;
const useGetScheduledProspects = localAPI.useGetScheduledProspects;
const useSnoozeProspect = localAPI.useSnoozeProspect;
const useRejectProspect = localAPI.useRejectProspect;
const useUpdateProspect = localAPI.useUpdateProspect;
const useRemoveProspect = localAPI.useRemoveProspect;
const getMutationOptions = localAPI.getMutationOptions;

const useCreateProspectByUrl = process.env.REACT_APP_USE_POCKET_API
  ? awsAPI.useCreateProspectByUrl
  : awsAPI.useCreateProspectByUrl;

export {
  client,
  useGetCurrentFeed,
  useGetPendingProspects,
  useGetSnoozedProspects,
  useGetRejectedProspects,
  useGetApprovedProspects,
  useGetLiveProspects,
  useGetScheduledProspects,
  useCreateProspectByUrl,
  useSnoozeProspect,
  useRejectProspect,
  useUpdateProspect,
  useRemoveProspect,
  getMutationOptions,
};

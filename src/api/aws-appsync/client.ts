import { createAuthLink, AuthOptions } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';

/**
 * Set up connection credentials for the AWS AppSync API.
 */
const config = {
  url: `${process.env.REACT_APP_API_ENDPOINT}`,
  region: `${process.env.REACT_APP_API_REGION}`,
  auth: {
    type: 'API_KEY',
    apiKey: `${process.env.REACT_APP_API_KEY}`,
  } as AuthOptions,
};

/**
 * Set up the link for Apollo to be able to connect to AWS AppSync.
 */
const link = ApolloLink.from([
  createAuthLink(config),
  createSubscriptionHandshakeLink(config),
]);

/**
 * Construct an instance of ApolloClient that will be used in <ApolloProvider>
 */
export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

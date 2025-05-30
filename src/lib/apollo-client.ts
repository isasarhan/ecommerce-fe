import { ApolloClient, InMemoryCache, HttpLink, from, OperationVariables, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'

export const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL

const authLink = setContext(async (_, { headers }) => {
  let actualToken;
  if (typeof window !== 'undefined' && Cookies.get('token')) {
    actualToken = Cookies.get('token');
  }

  return {
    headers: {
      ...headers,
      authorization: actualToken ? `Bearer ${actualToken}` : '',
    },
  };
});

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

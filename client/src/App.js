import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import GetUsers from './Components/GetUsers';
import Form from './Components/Form';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      return console.log(`GraphQL Error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    credentials: 'same-origin',
    uri: 'http://localhost:8000/graphql',
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Form />
      {/* <GetUsers /> */}
    </ApolloProvider>
  );
}

export default App;

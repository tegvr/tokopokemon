import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri : 'https://graphql-pokeapi.graphcdn.app/'
})

const client = new ApolloClient({
  cache,
  link
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>,
  document.getElementById('root')
);


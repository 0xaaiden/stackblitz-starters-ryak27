import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

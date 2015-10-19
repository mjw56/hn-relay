import 'babel-core/polyfill';
import React from 'react';
import Relay from 'react-relay';
import { render } from 'react-dom';
import HNApp from './containers/HNApp';
import HNAppHomeRoute from './routes/HNAppHomeRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(
    'http://localhost:3100/graphql',
    {
      fetchTimeout: 30000,   // Timeout after 30s.
      retryDelays: [5000],   // Only retry once after a 5s delay.
    },
    {
      credentials: 'same-origin'
    }
  )
);

render(
  <Relay.RootContainer
    Component={HNApp}
    route={new HNAppHomeRoute()}
  />,
  document.getElementById('root')
);

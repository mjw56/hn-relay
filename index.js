import 'babel-core/polyfill';
import React from 'react';
import Relay from 'react-relay';
import { render } from 'react-dom';
import {App} from './containers/App';
render(
  <App />,
  document.getElementById('root')
);

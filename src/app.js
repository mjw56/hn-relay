import 'babel-core/polyfill';
import React, {Component} from 'react';
import Relay from 'react-relay';
import { render } from 'react-dom';
import {Header} from './components/Header';
import TopItems from './containers/HNTopItems';
import AskStories from './containers/HNAskStories';
import HNAppTopItemsRoute from './routes/HNAppTopItemsRoute';
import HNAppAskStoriesRoute from './routes/HNAppAskStoriesRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(
    'http://localhost:3100/graphql'
  )
);

class App extends Component {

  constructor() {
    super();

    this.state = {
      page: 'top-items'
    };

    this.pages = {
      ['top-items']: () => (
        <Relay.RootContainer
          Component={TopItems}
          route={new HNAppTopItemsRoute()}
        />
      ),
      ['ask-stories']: () => (
        <Relay.RootContainer
          Component={AskStories}
          route={new HNAppAskStoriesRoute()}
        />
      )
    }
  }

  _handleHeaderClick(item) {
    this.setState({
      page: item
    });
  }

  render() {
    const items = ['top-items', 'ask-stories'];
    return (
      <div>
        <h1>Hello!</h1>
        <Header items={items} click={this._handleHeaderClick.bind(this)} />
        {this.pages[this.state.page]()}
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);

import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class HNApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {topItems} = this.props;
    console.log('skizzo', topItems);
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

HNApp.propTypes = {};

export default Relay.createContainer(HNApp, {
  fragments: {
    topItems: () => Relay.QL`
      fragment on Query {
        topItems {
          items(first: 10) {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    `,
  },
});

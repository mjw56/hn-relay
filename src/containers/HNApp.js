import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class HNApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {topItems} = this.props;
    return (
      <div>
        {topItems.items.edges.map(i => <p>{i.node.title}</p>)}
      </div>
    );
  }
}

HNApp.propTypes = {};

export default Relay.createContainer(HNApp, {
  fragments: {
    topItems: () => Relay.QL`
      fragment on TopItem {
        items(first: 10) {
          edges {
            node {
              title
            }
          }
        }
      }
    `,
  },
});

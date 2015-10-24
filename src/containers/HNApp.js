import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

const HNApp = (props) => (
  <ul>
    {props.topItems.items.edges.map((i, idx) => <li key={idx}>{i.node.title}</li>)}
  </ul>
);

HNApp.propTypes = {
  topItems: PropTypes.object.isRequired
};

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

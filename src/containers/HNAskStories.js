import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

const AskStories = (props) => (
  <ul>
    {props.askStories.stories.edges.map((i, idx) => <li key={idx}>{i.node.title}</li>)}
  </ul>
);

AskStories.propTypes = {
  askStories: PropTypes.object.isRequired
};

export default Relay.createContainer(AskStories, {
  fragments: {
    askStories: () => Relay.QL`
      fragment on AskStories {
        __typename,
        stories(first: 10) {
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

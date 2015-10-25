import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    askStories: () => Relay.QL`
      query { askStories }`,
  };
  static routeName = 'HNAppAskStoriesRoute';
}

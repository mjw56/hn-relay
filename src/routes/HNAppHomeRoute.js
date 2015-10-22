import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    topItems: () => Relay.QL`
      query { topItems }`,
  };
  static routeName = 'HNAppHomeRoute';
}

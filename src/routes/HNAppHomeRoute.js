import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    topItems: (Component) => Relay.QL`
      query fetch {
        topItems {
          ${Component.getFragment('topItems')},
        }
      }`,
  };
  static routeName = 'HNAppHomeRoute';
}

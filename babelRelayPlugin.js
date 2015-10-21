import babelRelayPlugin from 'babel-relay-plugin';
import schema from './src/data/schema.json';

export default babelRelayPlugin(schema.data, {abortOnError: true});

var babelRelayPlugin = require('babel-relay-plugin');
var schema = require('./src/data/schema.json');

module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});

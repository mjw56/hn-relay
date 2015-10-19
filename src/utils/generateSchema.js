import fs from 'fs';
import path from 'path';
import {introspectionQuery} from 'graphql/utilities';
var fetch = require('node-fetch');

console.log('wtf', introspectionQuery)

fetch('http://localhost:3100/graphql', {
  method: 'post',
  body: `query=${introspectionQuery}`
})
.then(function(response) {
  return response.json()
}).then(function(result) {
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../data/schema.json'),
      JSON.stringify(result, null, 2)
    );
  }
})

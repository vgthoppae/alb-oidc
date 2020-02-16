'use strict';
var moment = require('moment');

module.exports.entry = async event => {
  const dateTimeNow = moment().format('LLL');
  return {
    statusCode: 200,
    body: JSON.stringify({ 'current-time': `${dateTimeNow}` }, null, 2),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};

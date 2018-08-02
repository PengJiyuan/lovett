const axios = require('axios');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function doHttpPost(url, params) {
  return axios.post(url, params);
}

module.exports = doHttpPost;

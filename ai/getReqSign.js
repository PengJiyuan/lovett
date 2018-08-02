const crypto = require('crypto');
const md5 = crypto.createHash("md5");

function objKeySort(obj) {
  const newkey = Object.keys(obj).sort();
  const newObj = {};
  for (let i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]];
  }
  return newObj;
}

function getReqSign(params, appkey) {
  let str = '';
  let sign = '';
  params = objKeySort(params);

  Object.keys(params).forEach((p) => {
    if (params[p] !== '') {
      str += `${p}=${encodeURI(params[p])}&`;
    }
  });

  str += `app_key=${appkey}`;

  md5.update(str);
  sign = md5.digest('hex').toUpperCase();

  return sign;
}

module.exports = getReqSign;
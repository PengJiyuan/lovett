const FakeMe = require('fakeme');
const utf8 = require('utf8');
const doHttpPost = require('./doHttpPost');
const getReqSign = require('./getReqSign');
const appkey = 'P6ATANYjGrHfMgfe';
const appId = '2107581891';
const url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat';
const fm = new FakeMe();

const params = {
  app_id: appId,
  time_stamp: String(Date.now()),
  nonce_str: fm.id({length: 10})[0],
  session: utf8.encode('10000')
}

params.sign = getReqSign(params, appkey);

function ai(input) {
  params.question = utf8.encode(input);

  doHttpPost(url, params).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
}

module.exports = ai;

require('dotenv').config();

var url = 'https://mt-auto-minhon-mlt.ucri.jgn-x.jp'; // 基底URL (https://xxx.jpまでを入力)
var key = process.env.trans_api_key; // API key
var secret = process.env.trans_api_secret; // API secret
var name = process.env.trans_login_id; // ログインID

var api_name = 'mt'; // API名 (https://xxx.jp/api/mt/generalNT_ja_en/ の場合は、"mt")
var api_param = 'generalNT_ja_en'; // API値 (https://xxx.jp/api/mt/generalNT_ja_en/ の場合は、"generalNT_ja_en")

var axios = require('axios');
var oauth = require('axios-oauth-client');
const getClientCredentials = oauth.clientCredentials(
  axios.create(),
  url + '/oauth2/token.php',
  key,
  secret,
);

async function test() {
  const auth = await getClientCredentials();

  var params = {
    access_token: auth.access_token,
    key: key, // API Key
    api_name: api_name,
    api_param: api_param,
    name: name, // ログインID
    type: 'json', // レスポンスタイプ
    text: 'さよーならまたいつか', // 翻訳テキスト
  };

  // クエリパラメータで渡さないと523エラーが返ってくる(´・ω・｀)
  var searchParams = new URLSearchParams();
  for (let key in params) {
    searchParams.append(key, params[key]);
  }

  const res = await axios.post(url + '/api/', searchParams);
  console.log(res.data.resultset.result.text);
}

test();
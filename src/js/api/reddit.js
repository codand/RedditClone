// import requests
// base_url = 'https://www.reddit.com/'
// data = {'grant_type': 'password', 'username': REDDIT-USERNAME, 'password': REDDIT-PASSWORD}
// auth = requests.auth.HTTPBasicAuth(APP-ID, APP-SECRET)
// r = requests.post(base_url + 'api/v1/access_token',
//                   data=data,
//                   headers={'user-agent': 'APP-NAME by REDDIT-USERNAME'},
// 		  auth=auth)
// d = r.json()

const HOST_URL = "https://www.reddit.com";
const LOGIN_URL = `${HOST_URL}/api/v1/access_token`;
const OATH2_CONFIG = {
  client_id: 'uq9C0FQA8rrYNg',
  response_type: 'code',
  state: 'TODO',
  redirect_uri: 'http://localhost:3000',
  duration: 'permanent',
  scope: 'identity edit flair history mysubreddits privatemessages read report save submit subscribe vote',
}

export async function requestAccessToken(username, password) {
  // const response = await fetch(LOGIN_URL, {
  //   method: "post",
  //   headers: new Headers({
  //     Authorization: "Basic " + btoa(`${username}:${password}`),
  //     "Content-Type": "application/json",
  //     'User-Agent': 'Demo for Reddit by /u/OhGodStop'
  //   }),
  //   body: {
  //     grant_type: "password",
  //     username: username,
  //     password: password,
  //   }
  // });
  // if (!response.ok) {
  //   throw Error(`Failed to log in: ${response.status}`);
  // }
  // return await response.json();
}

// https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=TYPE&state=RANDOM_STRING&redirect_uri=URI&duration=DURATION&scope=SCOPE_STRING
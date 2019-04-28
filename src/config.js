var config
var env = 'production'

config = {
  production: {
    apiUrl: 'http://demo-api.gitodemos.com',
  },
};

export default config[env]
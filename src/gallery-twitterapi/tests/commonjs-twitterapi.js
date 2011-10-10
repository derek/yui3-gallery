var Y = require("yui3").YUI({
    combine: false,
    debug:   true,
    filter:  'raw',
    modules: {
        'gallery-twitterapi': {
            fullpath: '../../../build/gallery-twitterapi/gallery-twitterapi.js',
            requires: ['yql', 'derek-oauth-tokens']
         },
        'derek-oauth-tokens': {
            fullpath: 'derek-oauth-tokens.js'
         }
    }
}).useSync('gallery-twitterapi');

exports.TwitterAPI = new Y.Twitter(Y.derekOAuthTokens);
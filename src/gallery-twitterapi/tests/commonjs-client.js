var Twitter = require("./commonjs-twitterapi.js").TwitterAPI;

Twitter.friends_timeline(function(tweets){
    for(var i in tweets){
        console.log(tweets[i].user.screen_name + ": " + tweets[i].text);
    }
});
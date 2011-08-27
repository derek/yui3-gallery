#!/bin/bash

#Create the directories
mkdir {js,css,src}

#Fetch the files
curl "http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.js" -o src/prettify.js
curl "http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.css" -o src/prettify.css

#Process and move the files
cat src/prettify.js | sed 's/window\[/Y\[/g' > js/prettify.js
cp src/prettify.css css/prettify.css

#Clean up
rm -rf src
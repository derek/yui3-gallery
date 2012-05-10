#!/bin/bash

#Create the directories
mkdir {js,css,src}

#Fetch the files
curl "http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.js" -o prettify.tmp.js
curl "http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.css" -o src/prettify.css
curl "http://google-code-prettify.googlecode.com/svn/trunk/styles/sunburst.css" -o src/sunburst.css

#Process and move the files
cat wrapper.pre.txt prettify.tmp.js wrapper.post.txt | sed 's/win\[/Y\[/g' | sed 's/window\[/Y\[/g' > js/prettify.js
cp src/prettify.css assets/skins/sam/gallery-prettify-skin.css
cp src/sunburst.css assets/skins/night/gallery-prettify-skin.css

#Clean up
rm -rf src
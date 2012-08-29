#!/bin/bash
echo "Checking for Node.js installation..."
which node
if [ $? -eq 1 ]; 
then
	echo "Couldn't find a Node.js installation!"
	echo "Please follow the instruction in Readme.md"
else
	echo "Node.js installation found!"
	CURRENT=$PWD
	echo "Current Directory :${CURRENT} ! Please wait..."
	node r.js -o boilerplatejs.build.js
	echo "Created the optimized build at : ${CURRENT}/build"
fi

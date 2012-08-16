#!/bin/bash
echo "Checking for Node.js installation..."
which node
if [ $? -eq 1 ]; 
then
	echo "Couldn't find a Node.js installation!"
	echo "Please follow the instruction in Readme.md"
else
	echo "Node.js installation found!"
	echo "Checking for YUIDoc installation..."
	which yuidoc
	if [ $? -eq 1 ];
	then
		echo "Couldn't find a YUIDoc installation!"
		echo "Please follow the instruction in Readme.md"
	else
		echo "YUIDoc installation found!"
		CURRENT=$PWD
		echo "Current :${CURRENT}"
		cd ../..
		yuidoc --themedir $CURRENT/template -o $CURRENT/docs src
		echo "Created the documentation on the current directory!"
	fi
fi

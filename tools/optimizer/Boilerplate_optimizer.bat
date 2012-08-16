echo off
set CURRENT=%CD%
cd %CURRENT%
echo Optimizing the source......
node r.js -o boilerplatejs.build.js
if errorLevel 9009 (
	echo Required applications not found! Please follow the instructions in the Readme	
)
echo Optimization completed!
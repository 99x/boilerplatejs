echo off
set CURRENTDIR=%CD%
cd ../..
echo Generating documentation......
yuidoc --themedir %CURRENTDIR%\template -o %CURRENTDIR%\docs src
if errorLevel 9009 (
	echo Required applications not found! Please follow the instructions in the Readme	
)
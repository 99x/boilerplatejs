echo off
set CURRENTDIR=%CD%
cd ../..
echo Generating documentation......
yuidoc --themedir %CURRENTDIR%\template -o %CURRENTDIR%\docs src
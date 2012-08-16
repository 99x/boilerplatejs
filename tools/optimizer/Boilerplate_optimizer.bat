echo off
set CURRENT=%CD%
cd %CURRENT%
echo Optimizing the source......
node r.js -o boilerplatejs.build.js
echo Optimization completed!
set CURRENTDIR=%CD%
cd ../..
yuidoc --themedir %CURRENTDIR%\template -o %CURRENTDIR%\docs src
cd \
echo %CD%
cd %CURRENTDIR%
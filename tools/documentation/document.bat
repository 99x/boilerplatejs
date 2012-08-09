set CURRENTDIR=%CD%
cd ../..
yuidoc --themedir %CURRENTDIR%\template -o %CURRENTDIR%\out src
cd \
echo %CD%
cd %CURRENTDIR%
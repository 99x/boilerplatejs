set CURRENTDIR=%CD%
cd ../..
yuidoc --theme %CURRENTDIR%\template -o %CURRENTDIR%\out src
cd %CURRENTDIR%
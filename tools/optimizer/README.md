Optimizing the project requires Java 1.6 or later.

To optimize the project,

1.Set the path in Boilerplate_optimizer.bat to the optimizer directory of the project

2.Double click on Boilerplate_optimizer.bat to run

The optimized project will be created in the same folder as the original project and will be named nutcoco-initdeploy-build as specified in the build file

Note - The command in Boilerplate_optimizer.bat is for windows environment. To run in OS X/Linux/Unix use the following:

java -classpath js.jar:compiler.jar org.mozilla.javascript.tools.shell.Main r.js -o boilerplatejs.build.js
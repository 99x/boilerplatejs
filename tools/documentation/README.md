Installing Node.js
	Windows users
		Download and install Node.js
	Linux Users
		sudo apt-get install python-software-properties
		sudo add-apt-repository ppa:chris-lea/node.js
		sudo apt-get update
		sudo apt-get install nodejs npm
	
Installing YUIDoc
	Windows users
		npm -g install yuidocjs
	Linux users
		sudo npm -g install yuidocjs
		
Generate Documentation
	Windows users	
		Run document.bat (via Command line or by double clicking)
	Linux users
		Open a terminal
		Goto the tools/documentation directory
		Run
			sudo chmod +x document.sh
			./document.sh
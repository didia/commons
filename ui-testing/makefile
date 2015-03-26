install-test-stuff: install-karma install-jasmine install-karma-plugins
	
install-karma:
	npm install karma --save-dev
	npm install -g karma-cli

install-karma-plugins: install-karma
	npm install karma-jasmine karma-chrome-launcher --save-dev

install-jasmine:
	npm install -g jasmine

init-jasmine: install-jasmine
	jasmine init

install-react: 
	npm install -g react-tools

install-browserify:
	npm install -g browserify


.PHONY : init-test install-karma install-karma-plugins install-jasmine init-jasmine
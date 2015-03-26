install:
	brew tap homebrew/science
	brew info opencv
	brew install opencv
	cd /usr/local/Cellar/


openni:
	cd ~ \
	brew install libusb \
	git clone -b unstable https://github.com/OpenNI/OpenNI.git OpenNI_install \
	cd OpenNI_install/Platform/Linux/CreateRedist \
	./RedistMaker \
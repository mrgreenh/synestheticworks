http://www.synestheticworks.com

## Setup Notes
- Use nvm-windows since the env is old and won't install on M1 macs..........
- Use npm v16.18.0
- Make sure development tools are installed: `npm --add-python-to-path='true' --debug install --global windows-build-tools`
- Make sure the python env variable is actually set: `npm config set python "C:\Users\carloandreaconte\.windows-build-tools\python27\python.exe"` (run a search in the filesystem to figure out where it is, follow symlinks to their actual destination, drill down to the .exe)
- make sure to install the gatsby-cli globally: `npm install -g gatsby-cli`
- `gatsby develop` and when ready `npm run deploy`

## If you had to run windows in a VM
- Just make sure to run git, gatsby etc from the terminal in windows
- Mount the network drive from mac explore so you can navigate to it in terminal, open in vscode etc...
- Find the IP address in windows with `Ipconfig` and open `<address>:8000` in browser on Mac to preview
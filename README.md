# group8

#### The original game comes from https://github.com/thatshaman/CharrioKart

# Enviroment Setup (For Centos Linux)

#### Part I: Install Node.js Env (more see https://nodejs.org/en/download/package-manager)

1. Add NodeSource yum repository
   1.  `curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -`
2. Once the NodeSource repository is enabled, install Node.js and npm
   1. `sudo yum install nodejs`
3. Verify Your installation 
   1. `node --version`
   2. `npm --version`

#### Part II: Run Three.Js Project locally (more see https://threejs.org/docs/#manual/en/introduction/How-to-run-things-locally)

1. Install local server by using npm (choose either five-server or node.js http-server)

   1. If you want to install node.js http-server:

      - install: `npm install http-server -g` 
      - to run, first cd to our project direcotry that contains index.html: `http-server . -p 5500`
      - use " http://localhost:5500" to play the game

   2. If you want to install Node.js five-server:

      - install:

      ```shell
      # Remove live-server (if you have it)
      npm -g rm live-server
      
      # Install five-server
      npm -g i five-server
      
      # Update five-server (from time to time)
      npm -g i five-server@latest
      ```

      - to run, first cd to our project direcotry that contains index.html: `http-server . -p 5500`
      - use " http://localhost:5500" to play the game


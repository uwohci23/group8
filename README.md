# group8: A Car Racing Game

#### The original game comes from https://github.com/thatshaman/CharrioKart

# Online Version (Deployed on AWS Amplify)

visit: https://dev593.d3t2m33h5u8s96.amplifyapp.com/

Please play it using computer to gain the best playing experience. 

# Local Version - Enviroment Setup (For Centos Linux)

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

# Local Version - Enviroment Setup (Windows)

1. Please visit this website: http://fenixwebserver.com/ 

2. Click on "Download Now" to download FEMIX 2.0, which will be used to run the game. 
   1. In Assets, choose fenix-windows-2.0.0.zip, extract the files in the zip. 
   2. Run the executive "fenixsetup.exe" to install FENIX 2.0 as you like. 
   3. Launch FENIX 2.0, in the top menu, select "Web Server", then "New" to create a new server; name the server as you like, set the directory as the location of the project folder "group8". Click on "Create" to finish creating. 
   4. You will see a server jumping into the list. Click on the triangle icon on the right side to Start Server, and then click on the server name to open a webpage; then, in the webpage, click on the folder name to start the game. 

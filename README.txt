This starter code will run a server on port 3001, and have a React app 
connect to that server.

1) Unzip server.zip and navigate to the folder in the terminal, run:

npm install
node server.js

2) Unzip frontend.zip and navigate to the folder in the terminal, run:

npm install
npm start 

The server will start randomly generating social media posts and send them 
via Websockets to the frontend.  The frontend will display them on the webpage 
as they arrive.

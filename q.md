I have a sveltekit app (frontend) which has been built in "build" folder using adapter-node.
I also have another node-express.js app running seperately. 
I want the frontend and the node.js app to use the same server, How to do that what are the options.  

At the moment i am using an  architecture in which node app is running on port:3000 where as frontend is using port:80. All the urls are directed to frontend directly and not to node server. When frontend likes to communicate it use ajax call from +page.server.js file of that page in svelte frontend app. IS THIS THE CORRECT WAY TO DO IT, WHERE WE HAVE SEPERATE SERVERS RUNNING ON DIFFERENT PORTS WHERE THE FRONTEND APP IS USER FACING AND THE NODE.JS APP IS JUST RESPONDING TO FRONTEND APP

Am creating a sveltekit fullstack app using node adopter. For database I am running another node server with express to run database. The database engine (mysql) itsself is being run on adifferent:port. This make it 3 different ports for me to manange 1: svelte frontend app running on port:80 2:node-express app to communicate with the database and present the API 3: mysql data base engine running on port:4040. 
Quesyions:
1: Is this the correct way of managing this svelte-node-express-mysql app? if not which is a better way to arrange these?

2: how do i deploy such an app on  a linex server, use foreaxmapl linode or digietal ocean.



I want the frontend and the node.js app to use the same server, How to do that what are the options.  

At the moment i am using an  architecture in which node app is running on port:3000 where as frontend is using port:80. All the urls are directed to frontend directly and not to node server. When frontend likes to communicate it use ajax call from +page.server.js file of that page in svelte frontend app. IS THIS THE CORRECT WAY TO DO IT, WHERE WE HAVE SEPERATE SERVERS RUNNING ON DIFFERENT PORTS WHERE THE FRONTEND APP IS USER FACING AND THE NODE.JS APP IS JUST RESPONDING TO FRONTEND APP


///..


1.I have a sveltekit app (frontend app) which has been built in "build" folder using adapter-node.
2. I also have another node-express.js (API app) running seperately. 
3. There is also a mysql engine running on another port.

All these 3 items must be up and running to ensure that my app works.

I have not yet deployed this app yet. How do I deploy this app to some host (suppose digitalocean) without using docker?

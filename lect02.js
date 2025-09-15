// how to deploy backend code in production
// req , res ko express handle krta hai
// but in production we use nginx server to handle req and res
// nginx server is a reverse proxy server
// it takes the req from the client and forward it to the backend server
// backend server process the req and send the res to the nginx server
// nginx server then send the res to the client
// so the client never directly interact with the backend server
// nginx server can also handle static files like images, css, js etc
// it can also handle load balancing, caching, security etc
// so in production we use nginx server to handle req and res

// express listen krta hai req ko

// npm init --> node package manager se ek application ko initialize krna
// package.json file banti hai
// package.json file me humare project ke bare me information hoti hai jese project ka name, version, description, main file, scripts, dependencies, devDependencies etc

// start command -> node app.js
// dev command -> nodemon app.js
// nodemon -> it is a tool that helps in development of node js application, it automatically restart the server when any file is changed
// npm i nodemon --save-dev -> to install nodemon as a dev dependency
// dev dependency -> it is a dependency that is only needed during development, it is not needed in production
// dependencies -> it is a dependency that is needed in both development and production
// npm i express -> to install express
// express -> it is a web framework for node js, it makes it easy to handle req and res, it provides many features jese routing, middleware, template engine etc
// npm i dotenv -> to install dotenv
// dotenv -> it is a zero-dependency module that loads environment variables from a .env file into process.env, it is used to manage configuration in different environments jese development, testing, production etc
// .env file -> it is a file that contains environment variables, it should not be committed to version control system like git, it should be added to .gitignore file
// environment variables -> it is a variable that is set outside the application, it is used to store configuration jese database url, port number, secret key etc
// process.env -> it is an object that contains the environment variables, we can access the environment variables using process.env.VARIABLE_NAME

// production me deploye krne ke liye hum multiple jagh deploye kar sakte hain--> render, AWS, Digital Ocean, Azure, Heroku, Vercel, Netlify etc
// production me deploye krne ke liye hum git ka use karte hain
// git -> it is a version control system that helps in managing code, it allows us to track changes, collaborate with others and revert to previous versions
// deploye karne ke liye hume 3 cheeze chahiye hoti hai
// 1. code -> humara backend code
// 2. server -> jaha par hum apna code deploy karenge
// 3. domain name -> jese google.com, facebook.com etc
// server -> it is a machine that is connected to the internet, it has a public ip address, it can be a physical machine or a virtual machine, it can be a cloud server or a dedicated server
// domain name -> it is a human readable address that is used to access a website, it is mapped to a public ip address using dns (domain name system)
// dns -> it is a system that translates domain name to ip address, it is like a phone book that maps names to numbers
// hosting provider -> it is a company that provides server and domain name, jese heroku, digitalocean, aws, godaddy, namecheap etc
// heroku -> it is a cloud platform that allows us to deploy, manage and scale applications, it provides free tier for small applications, it is easy to use and has many features
// digitalocean -> it is a cloud platform that provides virtual private servers (droplets), it is affordable and has many features, it is suitable for small to medium applications
// aws -> it is a cloud platform that provides many services jese ec2, s3, rds, lambda etc, it is suitable for large applications, it has a free tier for 12 months
// godaddy -> it is a domain registrar that provides domain name and hosting services, it is suitable for small applications
// namecheap -> it is a domain registrar that provides domain name and hosting services, it is suitable for small applications
// git -> it is a version control system that helps in managing code, it allows us to track changes, collaborate with others and revert to previous versions
// github -> it is a web based platform that provides git repository hosting service, it allows us to store code, collaborate with others and deploy code
// ci/cd -> it is a process that automates the deployment of code, it stands for continuous integration and continuous deployment, it helps in faster and reliable deployment
// pm2 -> it is a process manager for node js applications, it helps in managing and monitoring applications, it provides features jese auto restart, load balancing, logging etc
// nginx -> it is a web server that can also be used as a reverse proxy server, it helps in handling req and res, it provides features jese load balancing, caching, security etc

// introduction of node js

// DB file -> actual code that connect to the database
// model file -> schema of the database or table--> data ka model ya sample how we store data
// controller file -> actual logic of the application--> jitni bhi functionality hoti hai wo yha par likhi hoti hai , logic isme likha hota hai
// route file -> url mapping -> url ko controller se map karna--> like /signup p aoo to ye functiona call ho jaye, kaun se function call hoga ye yha par likha hota hai

// middleware file -> function that have access to req and res object --> ye function req and res object ko access kar sakta hai, aur next function ko bhi access kar sakta hai, next function ka use hum tab karte hai jab hume next middleware function ko call karna hota hai

// example -> authentication middleware, authorization middleware, logging middleware etc

// config file -> all the configuration related to the application --> jese database ka url, port number, secret key etc

// utils file -> all the utility function --> jese hashing function, mail function, otp generater, token generation function etc--> aise function jo baar baar use hote hain unhe yha par likhte hain

// service file -> all the external service related function --> jese payment gateway, sms gateway, email service etc

// app.js or server.js file -> entry point of the application --> jese humara server start hota hai, middleware use hote hain, routes use hote hain etc  

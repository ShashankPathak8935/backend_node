//  import and require in express
// const express = require('express');--> ES6 module syntax this is old syntax
// javascript me 2 tarike hai file ko import krne ke
// 1. CommonJS (require) --> old syntax--> common js use krna hai to require use krte hain
// 2. ES6 Modules (import) --> new syntax --> es6 module use krna hai to import use krte hain

// Node.js me by default commonjs use hota hai
// agar hume es6 module use krna hai to hume package.json me "type": "module" add krna padega tab jaake hum import use kr skte hain

// app.use(cors())--> ye cors ko use krne ke liye hota hai
// npm install cors--> ye cors ko install krne ke liye hota hai
// cors application ko ek safty provide krta hai --> agr url alg hai to usko croos origin mana jata hai, agr apka port no alg hai to bhi usko cross origin mana jata hai
// origin ka mtlv url bhi same and port bhi same hona chahiye tabhi wo same origin mana jayega

// proxcy --> in frontend  vite.config.js me proxy use krte hain
// proxy ka mtlv hota hai ki ek server ke request ko dusre server pe bhejna
// jaise ki hamara frontend ka server 5173 pe run ho rha hai and backend ka server 3000 pe run ho rha hai to hume frontend se backend ko request bhejni hai to hume proxy use krna padega
// taki frontend ka server backend ke server se connect ho jaye
// proxy use krne ke liye hume vite.config.js me proxy ka code likhna padega
// jaise ki niche diya gaya hai

/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      '/api'{: 'http://localhost:3000' // jab bhi /api se request aayegi to usko http://localhost:3000 pe bhej do / api ke phle ye automatically append ho jayega
      changeOrigin:true,
      secure:false
      }
    }
  }
})
*/
// changeOrigin:true --> ye isliye hota hai taki origin ko change kr diya jaye
// secure:false --> ye isliye hota hai taki https ko http me convert kr diya jaye
// agar hume proxy use krna hai to hume backend me bhi /api likhna padega taki frontend se request aayegi to wo /api se hi aayegi
// n keval ye append ho jayega append to hoga hi hoga proxy lga di ajyegi ki jo req a ri hai wo isi url se aye
// ya fr server ke andar jakr whitelisting krni pdegi taki wo url se req accept kre

import express from "express"; // new syntax
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

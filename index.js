// REQUIRES
require('dotenv').config();
const express = require('express');
// Axios is a library that makes an api call and gets a response
// In fetch, we send an api call >>  that returns data >> that then needs to be turned into json // fetch ('api endpoint').then(response = > response.json()).then(data => {});
// Axios condenses the process
// and returns all the header info and data
const axios = require('axios').default;
const ejsLayouts = require('express-ejs-layouts');

// CREATE APP
const app = express();

// APP SETUP

app.set('view engine', 'ejs'); // set view engine to ejs
app.use(ejsLayouts); // use ejs layouts
app.use(express.urlencoded({ extended: false })); // sets up body-parse for parsing form data

// CREATE A PORT
// use whatever port is in the env variable/ OR use 3000
const PORT = process.env.PORT || 5000;

// CREATE ROUTES

app.get('/', (req, res) => {
  axios.get('https://api.github.com/users/ruvvet').then((response) => {
    console.log(response.data);
    const ruvvet = {
      login: response.data.login,
      url: response.data.html_url,
      name: response.data.name,
    };
    console.log(ruvvet);

    res.send(response.data);
  });
});










// Listen on the port

app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});

// import react from  'react' NO SE USA MÁS!!!

// const express = require("express"); //Importar algo en node
//importar dotenv
const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();

const express = require("express");
const bodyParser= require("body-parser");
const app = express();
const mongo=require("./db/connectionMongo");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const routeUsers = require("./routes/users")(app);
mongo.conectar(app);



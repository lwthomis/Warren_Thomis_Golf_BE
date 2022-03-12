const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Setup of dotenv variables
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const DB = process.env.DATABASE;

//setup of cors
const cors = require('cors');
const corsOptions = {
    credentials: true,
    optionSuccessStatus: 200
};

//import controllers
const tournamentController = require("./controllers/tournaments");
const userController = require("./controllers/users");
const resultController = require("./controllers/results");

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true    
    })
    .then(() => {
        const app = express();
        app.use(express.static("public"));
        app.use(cors(corsOptions));
        app.use(express.urlencoded({ extended: true }));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        //routes
        app.get("/tournaments", cors(), tournamentController.findTournaments);
        app.post("/tournaments", cors(), tournamentController.createTournament);
        app.get("/tournaments/:id", cors(), tournamentController.findTournament);
        app.patch("/tournaments/:id", cors(), tournamentController.updateTournament);
        app.delete("/tournaments/:id", cors(), tournamentController.deleteTournament);
    
        app.get("/results", cors(), resultController.findResults);
        app.post("/results", cors(), resultController.createResult);
        app.get("/results/:id", cors(), resultController.findResult);
        app.patch("/results/:id", cors(), resultController.updateResult);
        app.delete("/results/:id", cors(), resultController.deleteResult);
    
        app.get("/users", cors(), userController.findUsers); 
        app.post("/users", cors(), userController.createUser);
        app.get("/users/:email", cors(), userController.findUser);
        app.patch("/users/:id", cors(), userController.updateUser);
        app.delete("/users/:email", cors(), userController.deleteUser);
        app.post("/login", cors(), userController.signInUser);
    
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(() => {
        console.log("Database connection failed");
    });


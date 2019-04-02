const express = require('express');
const Router = express.Router;

const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/clamshellmacbooks')

// Creates the router
const clamshellMacBookRoutes = Router();

// Add handleras for my routes

// GET
clamshellMacBookRoutes.get('/', retrieveAll);

//POST
clamshellMacBookRoutes.post('/', create);

//PUT
clamshellMacBookRoutes.put('/', update);

//Delete
clamshellMacBookRoutes.delete('/', deleteOne);

// Exports the router
module.exports = clamshellMacBookRoutes;
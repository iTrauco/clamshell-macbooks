//POST/Create
function create(req, res) {
    res.json({message: "Yasss! You created! =D"});
}

//GET/Retrieve
function retrieveAll(req, res) {
    res.json({message: "Yasss! You retrieved all! =D" });
}

//Update
function update(req, res) {
    res.json({message: "Yasss! You updated! =D"});
}

//Delete
function deleteOne(req, res) {
    res.json({message: "Yasss! You deleted! =D"});
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne
}
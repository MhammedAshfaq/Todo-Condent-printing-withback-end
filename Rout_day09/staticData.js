const express = require("express");
const router = express.Router();

const users = [
    { id: 1, name: "Muhammed Ashfaq", company: "Google", place: "Naripparambu" },
    { id: 2, name: "Neja febin", company: "Amazon", place: "Tirur-vailathoor" },
    { id: 3, name: "Fathima Niya", company: "LinkedIn", place: "Tirur" },
    { id: 4, name: "Shahina", company: "Tata", place: "Pattambi" },
    { id: 5, name: "Afna", company: "Google", place: "Edappal" },
    { id: 6, name: "Jifsila", company: "Cisco", place: "Edappal" }
]

//Quary paramitter    // most usefull in currend market
router.get("/", (req, res) => {
    const quary = parseInt(req.query.id);
    const userName = req.query.name;
    const userPlace = req.query.place;
    const userJob = req.query.company;
    const filteredusersData = users.filter((data) => {
        if (quary || userName || userPlace || userJob) {
            return data.id === quary || data.name === userName || data.place === userPlace || data.company === userJob;
        } else {
            return data;
        }
    });
    res.json(filteredusersData);
});  // calling() http://localhost:3001/user?id=2&name=Neja febin)


//id and name tracking
router.post("/:id/:name", (req, res) => {
    const usersId = parseInt(req.params.id);
    const userName = req.params.name;
    const filteredusersData = users.filter((data) => data.id === usersId || data.name === userName); // this case( data.id )is uers id
    res.json(filteredusersData);
});  // caliing (http://localhost:3001/user/3/FathimaNiya)

// Exporting This File
module.exports = router;
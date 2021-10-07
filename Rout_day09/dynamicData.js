const express = require("express");
const router = express.Router();


const userArray = [];
// This is (Frend end backeud data transfering) 
router.post("/addUser", (req, res) => {
    userArray.push(req.body);
    console.log(userArray);
    res.json("Data has been adde successfully")
});

router.get("/displayUser", (req, res) => {
    res.json(userArray)
});

// Exxporting This Fule
module.exports = router;
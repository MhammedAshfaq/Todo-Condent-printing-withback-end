//Ajax 

const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors({  //html api connecting middle were
    //  origin:"http://127.0.0.1:5500"   // Acssecing url port Adress seting
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routed Files
app.use("/user", require("./Rout_day09/staticData"));
app.use(require("./Rout_day09/dynamicData"));

//error Massege Section
app.get("*", (req, res) => {
    res.json("No route availeble");
})
// PORT Setting
app.listen(3002, () => console.log("Server Started"));
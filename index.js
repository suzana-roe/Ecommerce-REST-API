const express = require("express");
const userRoutes = require('./src/user/routes');
const app = express();
const pool = require("./db")

app.use(express.json());

//routes//
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/users", userRoutes);




app.listen(5000, () => {
    console.log("server is listening on port 5000");
});


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;

mongoose.connect(
    `mongodb+srv://quanshenjoelmichael21s:joelmichael94@jms-fs.ofi9vbd.mongodb.net/Hackathon?retryWrites=true&w=majority`
);

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.static("public"));

app.use("/users", require("./api/users"));
app.use("/profiles", require("./api/profiles"));

app.listen(PORT, () => console.log("Server is rolling on PORT" + PORT));
mongoose.connection.once("open", () =>
    console.log("You are connected to MongoDB")
);

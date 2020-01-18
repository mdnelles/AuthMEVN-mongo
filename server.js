const express = require("express"),
      cors = require("cors"),
      bodyParser = require("body-parser"),
      app = express(),
      mongoose = require("mongoose"),
      port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

const mongoURI = 'mongodb://localhost:27017/mevnloginreg'

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

var Users = require("./routes/Users")

app.use("/users", Users)

app.listen(port, function () {
    console.log("Server is running on port: " + port)
})
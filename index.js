require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const { checkForAuthentication } = require("./middlewares/auth");

const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 8005;

// Database
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB).then(()=> console.log("Database connected!")).catch(()=>console.log("Error while connecting to database."));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);
app.use(express.static(__dirname+"/public"));
app.use("/user", userRoute);
app.use("/", staticRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));

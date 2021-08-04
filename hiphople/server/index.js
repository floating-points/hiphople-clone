import express from "express"
import api from "./routes/api.js"
import path from "path";
import bodyParser from "body-parser";

const __dirname=path.resolve();
const app=express();
app.use(express.json());

const PORT=8000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api",api);
app.use("/", express.static(__dirname+"../../client/build"));

app.listen(PORT, ()=>{
    console.log("example app running on port", PORT);
})
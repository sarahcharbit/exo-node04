require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;

app.get("/", (req,res)=> {
res.send(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and i love ${process.env.MY_LANGUAGE}`)})
app.listen(port, () =>
console.log(`server on port ${process.env.SERVER_PORT}`));
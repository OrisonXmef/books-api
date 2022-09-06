const express=require("express");
const dotenv=require("dotenv");
const books = require("./books");
const router=require('./routes/booksRoutes')
const logger = require ("express")

dotenv.config();
const app = express();
app.use(logger);
//middleware
app.use(express.json(  ))
//route
app.get("/", (req, res) =>{
    res.send("Welcome to our Library")
})
//get all results
app.get("/books", (req, res)=>{
    res.json(books)
})

const PORT = process.env.PORT || 7000

app.listen(PORT,() =>
     console.log(`server is running on ${PORT}`))
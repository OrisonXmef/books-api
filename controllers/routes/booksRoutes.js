const {Router} =require ("express")
const{getBooks} = require("../controllers/booksControllers")
const route=Router();
Router.route("/books").get(getBooks)
module.exports=router
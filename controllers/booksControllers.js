const books = require ("../books")
//get all books
const geetBooks= (req, res) => {
    res.status(200).json(books);
}
module.exports={getBooks}
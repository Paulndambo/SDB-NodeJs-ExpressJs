const express = require('express');
const morgan = require('morgan');
const {books} = require('./bookList');

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const PORT = 5050;

// all books
// www.mybooks.com/books
app.get("/books", (req, res) => {
    return res.send(books).status(200);
});

// specific book
// www.mybooks.com/books/{id}
app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.find(book => {
        return book.id === id;
    });

    if (book) {
        return res.send(book).status(200);
    } else {
        return res.send({"message": "Book not found"}).status(404);
    }
});

// create a book
app.post("/books", (req, res) => {
    const book = req.body;
    books.push(book);
    return res.send(book).status(201);
});


// updating a book
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => {
        return book.id === id;
    });

    if(book.title && book.author && book.genre) {
        book.title = req.body.title;
        book.author = req.body.author;
        book.genre = req.body.genre;
        return res.send(book).status(200);
    } else{
        return res.send({"message": "Book not found"}).status(404);
    }
});

// deleting a book
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => {
        return book.id === id;
    });

    if(book) {
        const newBookList = books.filter(book => {
            return book.id !== id;
        });
        return res.send(newBookList).status(204);
    } else{
        return res.send({"message": "Book not found"}).status(404);
    }
});


// accessing the server
app.get("/", (req, res) => {
    res.send({"message": "Server is accessible"});
});

app.listen(PORT, () => {
    console.log(`SERVER IS LISTENING AT PORT https://localhost:${PORT}`);
});
const express = require("express");
const morgan = require("morgan");

const { todoItems } = require("./todos");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
    return res.send({"message": "The server is accessible"}).status(200);
});

// Todo Routes
// 1. /todos (GET, POST)todoItems;
app.get("/todos", (req, res) => {
    return res.send(todoItems).status(200);
});

// 2. /todos/:id (PUT, PATCH, GET, DELETE

// Start the server
app.listen(PORT, () => {
    console.log(`Server is on: http://localhost:${PORT}`);
});
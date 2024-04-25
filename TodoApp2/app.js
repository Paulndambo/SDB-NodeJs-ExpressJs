const express = require('express');
const morgan = require('morgan');

const { todoItems } = require("./todos");

const app = express();
const PORT = 9000;

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    return res.send({"message": "The server is working"}).status(200);
});

// Getting all todo items
app.get("/todos", (req, res) => {
    return res.json(todoItems).status(200);
});

// 2. Creating a new todo item
app.post('/todos', (req, res) => {
    const data = req.body
    todoItems.push(data);
    return res.json(data).status(201);
});

// 3. Getting one todo item
app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    const item = todoItems.find(item => item.id == id);
    return res.json(item).status(200);
});

// 4. Updating one todo item
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const item = todoItems.find(item => item.id == id);

    if(data.title && data.description && data.completed) {
        item.title = data.title;
        item.description = data.description;
        item.completed = data.completed;
    
        return res.json(item).status(200);
    } else {
        return res.json({"error": "You must update all fields"}).status(400)
    }
})

// 5. Delete one todo item
app.delete("/todos/:id", (req, res) => {
    const { id } = req.params;

    if(id) {
        const filteredTodos = todoItems.filter(item => item.id !== id)
        return res.json(filteredTodos).status(204);
    } else {
        return res.json({"error": "You must provide an id"}).status(400);
    }

})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
})
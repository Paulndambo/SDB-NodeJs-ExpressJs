const express = require('express');

const app = express();
const PORT  = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.get("/", (req, res) => {
    console.log("Home Page!!")
    res.send("Home Page Updated!!")
})

app.get("/hello", (req, res) => {
    console.log("Hello World!!")
    res.send("Hello World!!")
})


const workers = [
    {
        "id": 1,
        "name": "John",
        "email": "john@example.com"
    },
    {
        "id": 2,
        "name": "Jane",
        "email": "jane@example.com"
    },
    {
        "id": 3,
        "name": "James",
        "email": "james@example.com"
    }
]

app.get("/workers", (req, res) => {
    res.send(workers)
})


app.post("/greet", (req, res) => {
    const data = req.body;
    const message = `Hello ${data.name}`;
    
    res.send(message)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

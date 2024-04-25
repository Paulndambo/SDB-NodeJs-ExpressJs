const express = require("express");
const morgan = require("morgan");

// Routes 
const studentsRoutes = require("./routes/students");

// Constants
const PORT = 5000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));


// routes
app.get("/", (req, res) => {
  res.send({"message": "The server is working fine"}).status(200);
});

// Students Routes
app.use("/students", studentsRoutes);


// starting the server
app.listen(PORT, () => {
  console.log(`Server is running on:  http://localhost:${PORT}`);
});
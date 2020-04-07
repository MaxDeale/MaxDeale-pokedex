const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
const cors = require("cors");

// connect to DB
connectDB();

// Init middleware
app.use(
  express.json({
    extended: false,
  })
);

app.use(cors());

app.get("/", (req, res) =>
  res.json({
    msg: "Welcome to the Pokedex API",
  })
);

app.use(express.static(path.join(__dirname, 'client/build')));

// defining routes
app.use("/api/users", require("./routes/users"));
app.use("/api/pokemon", require("./routes/pokemon"));
app.use("/api/auth", require("./routes/auth"));

//serve static assets in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.port || 5000;

//ddd
app.listen(`${PORT}`, () => {
  console.log(`Pokemon server started successfully in port ${PORT}`);
});
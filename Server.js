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

app.use(express.static("./"));

app.use(cors());

app.get("/", (req, res) =>
  res.json({
    msg: "Welcome to the Pokedex API",
  })
);

// defining routes
app.use("/api/users", require("./routes/users"));
app.use("/api/pokemon", require("./routes/pokemon"));
app.use("/api/auth", require("./routes/auth"));

let port = process.env.PORT;

if (port == null || port == "") {
  port = 5000;
}
app.listen(port, () => {
  console.log(`Pokemon server started successfully in port ${port}`);
});

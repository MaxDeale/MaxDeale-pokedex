const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

// connect to DB
connectDB();

// Init middleware
app.use(
  express.json({
    extended: false
  })
);

app.get("/", (req, res) =>
  res.json({
    msg: "Welcome to the Pokedex API"
  })
);

// defining routes
app.use("/api/users", require("./routes/users"));
app.use("/api/pokemon", require("./routes/pokemon"));
app.use("/api/auth", require("./routes/auth"));

//serve static assets in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.port || 5000;

//ddd
app.listen(`${PORT}`, () => {
  console.log(`Pokemon server started successfully in port ${PORT}`);
});
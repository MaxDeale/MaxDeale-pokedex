const express = require("express");
const connectDB = require("./config/db");
const app = express();


// connect to DB
connectDB();

// Init middleware
app.use(express.json({
    extended: false
}));


app.get('/', (req, res) => res.json({
    msg: "Welcome to the Pokedex API"
}));



// defining routes
app.use('/api/users', require('./routes/users'))
app.use('/api/pokemon', require('./routes/pokemon'))
app.use('/api/auth', require('./routes/auth'))





const PORT = process.env.port || 5000

app.listen(`${PORT}`, () => {
    console.log(`Pokemon server started successfully in port ${PORT}`);
});
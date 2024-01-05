const dotenv = require ("dotenv");
const express = require('express');
const http = require('http');
const morgan = require("morgan");

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);

// Allow requests from your React app's domain
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json());
app.use(morgan("dev"));

app.use("/university", require("./routes/university"));

server.listen(port, () => {
  console.log(`Node.js server running on port ${port}`);
});
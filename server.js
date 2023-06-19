const express = require("express");
const path = require("path");

//import the routes, set api variable to require our routes
const api = require("./routes/index");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Send all the requests that begin with /api to the index.js in the routes folder
//2. prefix all routes for varible 'api' with /api
app.use("/api", api);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
// GET Route for homepage
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

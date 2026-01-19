const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:4f46dXDFclX3mtYi@cluster0.nhqemon.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.log(err));

app.use("/api/tasks", require("./routes/taskRoutes"));

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

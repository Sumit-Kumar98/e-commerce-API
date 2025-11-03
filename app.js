require("dotenv").config()

const express = require("express");
const app = express();

// database
const connectDB = require("./db/connect");

app.get('/', (req,res) => {
    res.send('e-commerce api')
})

app.use(express.json());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`app is listening on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();

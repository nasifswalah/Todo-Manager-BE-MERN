const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const router = require('./routes/TodoRoute');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log(error))

app.use(router);

app.listen(port, (req, res) => {
    console.log(`Listening at ${port}`);  
})


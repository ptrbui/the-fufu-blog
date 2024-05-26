const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://pbui2021:P36qut6r7lZplFEU@cluster0.ve2m99d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req,res) => {
    const{username, password} = req.body;
    const userDoc = await User.create({username, password});
    res.json(userDoc);
});

app.listen(4000);

// Cluster0
// username: pbui2021
// password: P36qut6r7lZplFEU

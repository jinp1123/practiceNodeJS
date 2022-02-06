const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JPK:pyeong93!%40@cluster0.iff5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
const app = express();
const port = 5000;



app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
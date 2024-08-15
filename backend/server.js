require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./Routes/auth');
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const corsOptions = {
    origin : process.env.CLIENT_URL,
    methods : 'GET, POST, PUT, DELETE',
    Credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth', authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
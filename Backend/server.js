const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const connectDb = require('./config/mongodb');
const userRouter = require('./routes/user.route');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use('/api/auth', userRouter);

app.get('/ping', (req, res) => {
    res.send("pong");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    connectDb();
    console.log('server is running at', port)
});
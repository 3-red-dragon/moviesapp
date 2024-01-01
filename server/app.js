const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
const router = require('./Routes/Movie-routes');
const routers = require('./Routes/Theatre-route');
const userrouter = require('./Routes/User-routes');
const adminrouter=require('./Routes/Admin-routes')
app.use('/movies', router)
app.use("/theatres", routers)
app.use('/user',userrouter)
app.use("/admin",adminrouter)
mongoose.connect('mongodb://127.0.0.1:27017/mini-project',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('connection successful...')
    }).then(() => {
        app.listen(8000)
    }).catch((err) => console.log(err));


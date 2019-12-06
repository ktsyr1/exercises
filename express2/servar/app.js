const express =require('express');
const cors =require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

const uri = process.env.URIX;
mongoose.connect(uri, {
    useCreateIndex : true ,
    useNewUrlParser :true,
    useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open',()=>console.log('db connect'))
const centarRoute = require('./routes/centar');
const userRoute = require('./routes/user');
app.use('/centar',centarRoute);
app.use('/user',userRoute);

app.listen(port,()=>console.log(`run server ...${port}`))
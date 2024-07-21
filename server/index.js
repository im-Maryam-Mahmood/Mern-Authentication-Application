const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const mongoose = require('mongoose');
require('dotenv').config();


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

//Connection
const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGOURL
mongoose.connect(MONGOURL,).then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log(`Server Started At PORT: ${PORT}`)
    })
}).catch(error => console.log(error))


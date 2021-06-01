const express = require('express');
const app = express();
app.use(express.json());
const blogRoutes = require('./routes/blogRouter')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dev:dev@cluster0.8gucq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('db connected')).catch((error) => {
    console.log('error occured',error)
})

app.use('/blog', blogRoutes)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
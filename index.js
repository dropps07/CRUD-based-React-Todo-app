const express = require('express');
const app = express.app();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 
const cors = require('cors');
server.use(cors());


const todoRoutes = require("./routes/todoRoutes");
app.use('/api/todos', todoRoutes);
const PORT = process.env.PORT || 3000; //`process.env.PORT` is a variable port often used for development,testing but in any case the port is down then by default the server will listen to port 3k

mongoose.connect('mongodb+srv://dropps07:Yfce6yP573p1xNQ3@cluster0.2uvtpg0.mongodb.net/todoapp',{
    useNewUrlParse: true,
    useUnifiedTopology: true,
});
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', ()=> {
    console.log('Connected to MongoDB');
 }); //error handeling middleware
 
 app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
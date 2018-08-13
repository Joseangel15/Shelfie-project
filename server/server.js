require('dotenv').config()
const bodyParser = require('body-parser');
const massive = require('massive');
const express = require('express');
const controller = require('./controllers')
const app = express();
const session = require('express-session');
app.use(express.json())

const {

    PORT,
    CONNECTION_STRING

} = process.env

app.use(bodyParser.json())


massive( CONNECTION_STRING ).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('database connected')
}).catch(err => console.log(err));

const c = controller;

//Endpoints


//Displays bins to the BinList Component
app.get('/api/Shelve/Bins/:id',  c.getBins )


//Calls bin information
app.get('/api/Shelve/Bin/:id', c.getSpecBin )


//Updates to bins
app.put('/api/Shelf/saveToBin/:id', c.addBin )


//Delete Endpoint

app.put('/api/Shelve/DeleteBin/:id', c.deleteProduct )




app.listen(PORT, () => { console.log(`Welcome to my server ${PORT}!`);});
const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DBuser,
    password: process.env.DBpass,
    database: 'website'
});

const port = 3000

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use((err, req, res, next) => {
    console.log(req)

    return res.send({ "statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG });

});




app.post('/post', function(req, res) {

    var data = JSON.stringify(req.body)

    console.log(data)

    var response = {
        'dest': '/public/'
    }
    res.send(response);
    //write data to database


    connection.query(
        `INSERT INTO data VALUES('${data}')`
    )

});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
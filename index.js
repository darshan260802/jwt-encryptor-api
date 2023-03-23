const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT ?? 5000;


app.use(cors());
app.use(express.json());

app.get('/' , function(request, response){
    response.status(200).send(
        `
        <h1>Hello, Welcome To My Api</h1>
        <h3>use { POST: /transform/encrypt} with {body: { payload: &lt;data&gt;, secret: &lt;secret code&gt;}} to get token </h3>
        <h3>use { POST: /transform/decrypt} with {body: { token: &lt;jwt token&gt;, secret: &lt;secret code&gt;}} to get data </h3>
        `
    )
})

app.use("/transform", require("./Routes/transform"));

app.listen(port, function(){
    console.log('App is listening on port : %d', port);
})

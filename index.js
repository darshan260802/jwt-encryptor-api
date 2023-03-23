const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/' , function(request, response){
    response.status(200).send(
        "<h1>Hello</h1>"
    )
})

app.listen(3000, function(){
    console.log('App is listening on port : %d', 3000);
})

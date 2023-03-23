const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/encrypt', async function(request, response) {
    const {payload, secret} = request.body;
    if(!payload || !secret){

        if(!payload){
            response.status(400).json({message: 'missing required param: "payload"'})
            return;
        }
        response.status(400).json({message: 'missing required param: "secret"'})
        return;
    }
    try{
        jwt.sign(payload, secret, function (error, token){
            if(error){
                response.status(400).json(error)
                return;
            }
            response.status(200).json(token)
        });
    }catch(error){
        response.status(400).json({
            Error: error.message
        })
    }

})

router.post('/decrypt', async function(request, response) {
    const {token, secret} = request.body;
    if(!token || !secret){

        if(!token){
            response.status(400).json({message: 'missing required param: "token"'})
            return;
        }
        response.status(400).json({message: 'missing required param: "secret"'})
        return;
    }
    try{
        jwt.verify(token, secret, function (error, data){
            if(error){
                response.status(400).json(error)
                return;
            }
            response.status(200).json(data)
        });
    }catch(error){
        response.status(400).json({
            Error: error.message
        })
    }
})



module.exports = router;
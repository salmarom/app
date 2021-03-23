const { Router, Router } = require('express');
const router = Router();

//const express = require(express);
//const router = express.Router();

const usuarios = require('./data.json');
const api_url = '/usuarios';


router.get(api_url + '/:id', (request, response) => {
    const {id} = request.params;
    data.forEach(data => {
        if (data.id == id) {
            response.status(200).json(usuarios);
            return;
        }
    });
    response.status(500).send('usuario con id #' + id + ' NOT FOUND');
});


module.exports = router;

const { Router, Router } = require('express');
const router = Router();

//const express = require(express);
//const router = express.Router();

router.get('/',(req,res) => {
    res.json({"name":"namjoon"});
});

router.get('/usuarios',(req,res) => {
   const data = {
       "nombre"="John Doe";
       "id"= "1";
   };
   res.json(data);
});


module.exports = router;

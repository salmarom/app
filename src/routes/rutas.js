const { Router, Router } = require('express');
const router = Router();

//const express = require(express);
//const router = express.Router();

router.get('/',(req,res) => {
    res.json({"name":"namjoon"});
});

module.exports = router;

const express = require('express');
const {  getAllData } = require('../Controller/userController');
const router = express.Router();


router.get('/getAll',getAllData);


// export the router 
module.exports = router;
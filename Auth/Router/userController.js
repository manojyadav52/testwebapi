const express = require('express');
const { register, login, getAllData } = require('../Controller/userController');
const router = express.Router();


router.post('/register', register);
router.post('/login',login);
router.get('/getAll',getAllData);


// export the router 
module.exports = router;
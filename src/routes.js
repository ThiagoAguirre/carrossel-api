const express = require('express');

const UserController = require("./controllers/UserController")

const router = express.Router();

router.get('/users', UserController.index);

router.post('/users', UserController.store);

router.put('/users/:user_id', UserController.update);

router.delete('/users/:user_id', UserController.delete);

module.exports = router;
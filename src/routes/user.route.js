const { addUserController, showForm, addUserPage} = require('../controllers/user.controller')
    const router = require('express').Router();
    router.get('/', showForm);
    router.post('/home', addUserController);
    router.post('/allUsers', addUserPage);

    module.exports = router;

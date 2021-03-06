const UserController = require('../controllers/user.controller');

module.exports = app => {    
    app.post('/api/users/login', UserController.loginUser);
    app.post('/api/users/new', UserController.registerUser);
    app.get('/api/users', UserController.findAllUser);
    app.get('/api/users/:id', UserController.getUserByID);
}
const  IdeasController = require('../controllers/')

module.exports = app => {
    //app.get('/api/reservas', ReservaController.getAllCourts);
    app.get('/api/ideas', IdeasController.getAllIdeas);
    app.get('/api/idea/:id', IdeasController.getIdeaByID);
    app.put('/api/idea/update/:id', IdeasController.updateIdea);
    app.post('/api/idea/new', IdeasController.createNewIdea);
    //app.delete('/api/idea/delete/:id', IdeasController.deleteExistingIdea);
}
const Ideas = require('../model/ideas.model');

module.exports.findAllIdeas = (req, res) => {
    Ideas.find()
    .then(allIdeas => res.json({ideas: allIdeas}))
    .catch(err => res.json({ideas:null}));
}

module.exports.createNewIdea = (req, res) => {
    Ideas.create(req.body)
    .then(newIdea => res.send({idea: newIdea}))
    .catch(err => res.send({errors: err}));
}

module.exports.getIdeaByID = (req, res) => {
    Ideas.findById(req.params.id)
    .then(singleIdea => res.json({ideaData: singleIdea}))
    .catch(error => res.json({ideaData: null}));
}
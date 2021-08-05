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
    .then(singleIdea => res.json({idea: singleIdea}))
    .catch(error => res.json({idea: null}));
}

module.exports.updateIdea = (req, res) => {
    Ideas.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedIdea => {
        console.log(updatedIdea)
        return res.json({idea: updatedIdea})
    })
    .catch(err => res.status(404).json(err));
}

module.exports.deleteIdea = (req, res) => {
    Ideas.deleteOne({_id: req.params.id})
    .then(response => res.json({response: response}))
    .catch(err => res.json(err))
}
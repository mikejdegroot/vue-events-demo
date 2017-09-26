const Event = require('../models/event');

function indexRoute(req, res, next) {
  Event
    .find()
    .populate('createdBy')
    .exec()
    .then((events) => res.json(events))
    .catch(next);
}

function createRoute(req, res, next) {

  if(req.file) req.body.image = req.file.filename;
  req.body.createdBy = req.user;

  Event
    .create(req.body)
    .then((event) => res.status(201).json(event))
    .catch(next);
}

function showRoute(req, res, next) {
  Event
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((event) => {
      if(!event) return res.notFound();

      res.json(event);
    })
    .catch(next);
}

function deleteRoute(req, res, next) {
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if(!event) return res.notFound();

      return event.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}



module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  delete: deleteRoute
};

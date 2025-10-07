const Note = require('../models/noteModel');

exports.index = (req, res) => {
  res.render('index', { notes: Note.all() });
};

exports.newForm = (req, res) => res.render('new');

exports.create = (req, res) => {
  const n = Note.create({
    title: req.body.title,
    content: req.body.content
  });
  res.redirect('/');
};
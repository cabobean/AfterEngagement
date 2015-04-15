var express = require('express');
// var passport = require('passport')
//   , FacebookStrategy = require('passport-facebook').Strategy;

var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

////
//  By ID
////


/* GET /todos/id listing. */
router.get('/id', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos/id */
router.post('/id', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/id/:id */
router.put('/id/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/id/:id */
router.delete('/id/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id/id */
router.get('/id/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

////
//  By User
////


/* GET /todos/user listing. */
router.get('/user/:user', function(req, res, next) {
  Todo.find({ user: req.params.user}, function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});



module.exports = router;
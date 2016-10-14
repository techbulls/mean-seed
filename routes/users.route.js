var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
   //var db = req.db;
   //var User = db.get('usercollection');

  // create a new user
  var newUser = User({
    name: 'Peter Quill',
    username: 'starlord55',
    password: 'password',
    admin: true
  });

  // save the user
  newUser.save(function(err) {
    if (err) throw err;

    console.log('User created!');
  });

  User.find({}, function(err, users) {
    if (err) throw err;

    res.json(users);
  });
});

module.exports = router;

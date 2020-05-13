var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController')

router.get('/', (req, res) => {
  res.render('auth/login')
})

router.get('/users', UserController.create);
router.post('/users', UserController.store);

router.get('/registro', function(req, res, next) {
  res.render('auth/register');
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

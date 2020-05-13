var express = require('express')
var router = express.Router()

const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthController')

router.get('/', (req, res) => {
  res.render('auth/login')
})

// User registration
router.get('/users', UserController.create)
router.post('/users', UserController.store)

// User authentication
router.get('/login', AuthController.create)
router.post('/login', AuthController.store)

// App homepage
router.get('/home', function(req, res, next) {
  console.log(req.session)
  const { user } = req.session
  res.render('index', { user: req.session.user })
});

module.exports = router

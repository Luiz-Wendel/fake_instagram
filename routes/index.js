const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')

// middlewares
const auth = require('../middlewares/auth')

// controllers
const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthController')
const PostController = require('../controllers/PostController')

// multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public", "posts"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage })


// App homepage
router.get('/home', auth, function(req, res, next) {
  res.render('index')
});

router.get('/', (req, res) => {
  res.render('auth/login')
})

// User registration
router.get('/users', UserController.create)
router.post('/users', UserController.store)

// User authentication
router.get('/login', AuthController.create)
router.post('/login', AuthController.store)

// Publications routes
router.get('/post', auth, PostController.create)
router.post('/post', auth, upload.any(), PostController.store)

module.exports = router

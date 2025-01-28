const express = require("express")
const registerUser = require("../controllers/userControllers/registerUser")
const login = require("../controllers/userControllers/login")
const getUserBlogs = require("../controllers/userControllers/getUserBlogs")
const authenticateToken = require("../middleware/authenticate")

const router = express.Router()

router.post('/register',registerUser)
router.post('/login',login)
router.get('/profile',authenticateToken,getUserBlogs)


module.exports = router
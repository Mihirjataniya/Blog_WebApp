const express = require("express")
const getAllBlogs = require("../controllers/blogControllers/getAllBlogs")
const createBlog = require("../controllers/blogControllers/createBlog")
const updateBlog = require("../controllers/blogControllers/updateBlog")
const deleteBlog = require("../controllers/blogControllers/deleteBlog")
const getBlogById = require("../controllers/blogControllers/getBlogById")
const authenticateToken = require("../middleware/authenticate")

const router = express.Router()

router.get('/',getAllBlogs)
router.get('/:id',getBlogById)
router.post('/',authenticateToken,createBlog)
router.put('/:id',authenticateToken,updateBlog)
router.delete('/:id',authenticateToken,deleteBlog)

module.exports = router
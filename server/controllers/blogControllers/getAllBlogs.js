const Blog = require('../../models/blogSchema')

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "Something went wrong..."
        })
    }
}

module.exports = getAllBlogs
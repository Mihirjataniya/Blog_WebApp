const Blog = require('../../models/blogSchema')

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBlog = await Blog.findByIdAndDelete(id)

        if (!deletedBlog) {
            return res.status(404).json({
                error: "Blog not found..."
            })
        }

        return res.status(200).json({
            message: "Blog Deleted Successfully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Something went wrong"
        })
    }
}

module.exports = deleteBlog
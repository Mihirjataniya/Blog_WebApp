const Blog = require('../../models/blogSchema')

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params
        const { title, content, tags } = req.body
        const blog = await Blog.findById(id)
        if (!blog) {
            return res.status(404).json({
                error: "Blog not found"
            })
        }
        blog.title = title || blog.title
        blog.content = content || blog.content
        blog.tags = tags || blog.tags

        const updatedBlog = await blog.save()

        return res.status(200).json({
            message: "Blog Updated successfully",
            blogId: updatedBlog._id
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "Something went wrong..."
        })
    }
}

module.exports = updateBlog
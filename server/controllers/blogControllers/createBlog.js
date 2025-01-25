const Blog = require('../../models/blogSchema')

const createBlog = async (req,res) => {
    try {
        const { title , content , author , tags } = req.body
        if(!title || !content || !author || !tags){
            return res.status(400).json({
                error : "Some of the fields missing : i.e Title , Content , Author or Tags..."
            })
        }
        const newBlog = new Blog({
            title,
            content,
            author,
            tags
        })
        await newBlog.save()
        return res.status(200).json({
            message : "Blog create successfully",
            blogId : newBlog._id
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error : "Something went wrong..."
        })
    }
}

module.exports = createBlog
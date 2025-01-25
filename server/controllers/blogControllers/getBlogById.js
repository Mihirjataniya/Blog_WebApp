const Blog = require("../../models/blogSchema")

const getBlogById = async (req,res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)

        if(!blog){
            return res.status(404).json({
                error : "Blog not found..."
            })
        }

        return res.status(200).json({
            message : "Blog found successsfully",
            blog
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error : "Something went wrong"
        })
    }
}

module.exports = getBlogById
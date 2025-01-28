const User = require('../../models/userSchema');

const getUserBlogs = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await User.findById(id).populate('blogs');
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        const sortedBlogs = user.blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

        return res.status(200).json({
            message: "User's blogs fetched successfully",
            blogs: sortedBlogs
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Something went wrong..."
        });
    }
};

module.exports = getUserBlogs;

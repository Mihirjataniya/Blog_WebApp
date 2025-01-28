const User = require('../../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                error: "User not found..."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({
                error: "Invalid Credentials"
            });
        }
       
        const token = jwt.sign(
            { 
                id: user._id,
            },
            process.env.JWT_SECRET,
        );

        return res.status(200).json({
            message: "User logged in successfully",
            token,
            user : user.username
        });

    } catch (error) {
        console.error(error.message); 
        return res.status(500).json({
            error: "Something went wrong..."
        });
    }
};

module.exports = login;

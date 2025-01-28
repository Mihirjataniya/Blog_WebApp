const User = require('../../models/userSchema')
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({
                error: "All details are required..."
            })
        }
        const alreadyExist = await User.findOne({ email })
        console.log(alreadyExist);
        
        if (alreadyExist) {
            return res.status(403).json({
                error: "User already exist"
            })
        }   
        const newUser = new User({
            username,
            email,
            password
        })

        await newUser.save()
        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.JWT_SECRET
        );
        return res.status(200).json({
            message: "User Registered Successfuly",
            token,
            user : newUser.username
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "Something went wrong..."
        })
    }

}

module.exports = registerUser
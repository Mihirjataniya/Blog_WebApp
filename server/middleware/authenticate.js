const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    try {
        const authHeaders = req.headers['authorization']
        const token = authHeaders && authHeaders.split(' ')[1]
        if (!token) {
            return res.status(404).json({
                message: "No token available"
            })
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: "Invalid token" })
            req.user = user;
            next();
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "Something went wrong..."
        })
    }
}

module.exports = authenticateToken
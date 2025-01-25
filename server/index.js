const express = require("express")
const cors = require("cors")
const dotenv = require('dotenv')
const timeout = require("connect-timeout")
const connectDB = require("./config/database")
const blogRoutes = require('./routes/blogRoutes')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(timeout("120s"))

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server is running...",
    })
})
app.use('/api/v1/blog',blogRoutes)

const PORT = process.env.PORT || 3000
const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (error) {
        console.error("Error starting server:", error)
    }
}

startServer()
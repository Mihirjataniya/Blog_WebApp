const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
    try {
        const uri = process.env.DB_URI
        if (!uri) {
            throw new Error("MONGO_URI is not defined in environment variables")
        }
        await mongoose.connect(uri)
        console.log("Database Conneceted successfully")
    } catch (error) {
        console.error("Database Connection Error:", error.message)
        process.exit(1)
    }
}

module.exports = connectDB

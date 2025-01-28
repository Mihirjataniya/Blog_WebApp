import React, { useState } from 'react'
import { loginUser } from '../../apis'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            const response = await loginUser({
                email,
                password
            })
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", response.user);
            const savedToken = localStorage.getItem("token");
            const savedUser = localStorage.getItem("user");

            if (savedToken && savedUser) {
                navigate("/");
            } else {
                console.log("Error: Failed to save user data");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full md:max-w-md max-w-sm bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-[#15191C] text-center mb-6">Login</h2>
                <div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15191C]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="password"
                            placeholder="Your Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15191C]"
                        />
                    </div>
                    <button
                        onClick={() => login()}
                        className="w-full py-2 text-white bg-[#15191C] rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                        Login
                    </button>
                </div>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-[#15191C] hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login

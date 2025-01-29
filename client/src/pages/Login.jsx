import React, { useState } from 'react';
import { loginUser } from '../../apis';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async () => {
        if(!email || !password) {
            setError("All fields are required")
            return
        }
        setLoading(true);
        setError(null);
        try {
            const response = await loginUser({
                email,
                password
            });
            
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", response.user);
            
            const savedToken = localStorage.getItem("token");
            const savedUser = localStorage.getItem("user");
            
            if (savedToken && savedUser) {
                navigate("/");
            } else {
                setError("Failed to save user data. Please try again.");
            }
        } catch (error) {
            setError(error.message || "An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full md:max-w-md max-w-sm bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-[#15191C] text-center mb-6">Login</h2>
                
                <div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15191C]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Your Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15191C]"
                            required
                        />
                    </div>
                    <button
                        onClick={login}
                        className="w-full py-2 text-white bg-[#15191C] rounded-lg hover:bg-opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </div>
                {error && <p className="text-red-500 text-sm text-center my-4">{error}</p>}
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-[#15191C] hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
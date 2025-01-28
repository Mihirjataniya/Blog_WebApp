import { SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const username = localStorage.getItem('user') || 'User'
    const firstInitial = username.charAt(0).toUpperCase()

    return (
        <div className="flex items-center justify-between px-6 md:px-12 py-8 border-b border-gray-500 text-gray-200">
            <p
                onClick={() => {
                    navigate('/');
                }}
                className="md:text-2xl text-xl font-playwrite text-[#15191C] font-bold cursor-pointer"
            >
                BlogoSphere
            </p>
            <div className="flex items-center space-x-4">
                {localStorage.getItem('token') ? (
                    <div className='flex items-center gap-5'>
                        <button className='cursor-pointer' onClick={() => {
                            navigate('/write-blog')
                        }}>
                            <SquarePen size={36} strokeWidth={1.5} className='text-[#15191C]' />
                        </button>
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-10 h-10 rounded-full bg-[#15191C] text-white flex items-center justify-center text-lg font-semibold"
                            >
                                {firstInitial}
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-20">
                                    <p className="px-4 py-2 text-sm text-gray-500 border-b border-gray-200">
                                        {username}
                                    </p>
                                    <button
                                        onClick={() => {
                                            setIsOpen(false)
                                            navigate('/profile')
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Your Blogs
                                    </button>
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem('token')
                                            localStorage.removeItem('user')
                                            setIsOpen(false)
                                            navigate('/')
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                ) : (
                    <>
                        <button
                            onClick={() => {
                                navigate('/login')
                            }}
                            className="px-6 py-2 text-white bg-[#15191C] hover:bg-white hover:text-[#15191C] border hover:border-[#15191c] hover:bg-opacity-90 rounded-lg shadow-md transition duration-300 cursor-pointer"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => {
                                navigate('/register')
                            }}
                            className="px-6 py-2 text-[#15191C] border border-[#15191C] hover:bg-[#15191C] hover:text-white rounded-lg shadow-md transition duration-300 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar
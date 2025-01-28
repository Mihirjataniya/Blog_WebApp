import { Clock, Search, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '../../apis'
import { htmlToText } from "html-to-text";
import { convertDate } from '../utils/dateConversion';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const fetchResult = async () => {
            try {
                const blogs = await getAllBlogs()
                console.log(blogs);
                setData(blogs)
            } catch (error) {
                console.log(error);
            }
        }
        fetchResult()
    }, [])
    return (
        <div className='w-full h-full'>
           <Navbar />
            <div className='max-w-4xl mx-auto mt-4 px-5'>
                <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block decoration-0 w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl 
                     text-sm placeholder-gray-500 focus:outline-none focus:ring-2 
                      focus:border-transparent transition
                     bg-white shadow-sm"
                        aria-label="Search"
                    />
                </div>
                <div className='my-5 w-full'>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div
                                onClick={()=>{
                                    navigate(`/blog/${item._id}`)
                                }}
                                key={item._id}
                                className=" p-4 mb-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <h2 className="text-lg md:text-2xl font-ergaramond font-bold text-[#15191C]">
                                    {item.title}
                                </h2>
                                <p className="text-[#15191C] font-ergaramond text-sm md:text-lg my-2">{htmlToText(item.content).slice(0, 150)}...</p>
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs md:text-sm flex items-center gap-2 text-[#7f7f80] my-2">
                                        <span><User size={16} /></span> {item.author}
                                    </p>
                                    <p className="text-xs md:text-sm flex items-center gap-2 text-[#7f7f80] my-2">
                                        <span><Clock size={16} /></span> {convertDate(item.createdAt)}
                                    </p>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p className="text-[#15191C] flex items-center justify-center mt-18">No blogs available.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home

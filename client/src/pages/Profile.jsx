import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { deleteBlog, getUserBlogs } from '../../apis'
import { htmlToText } from 'html-to-text'
import { convertDate } from '../utils/dateConversion'
import { Clock, SquarePen, Trash2, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const response = await getUserBlogs()
                setData(response.blogs)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBlogs()
    }, [])

    return (
        <div className='w-full h-full'>
            <Navbar />
            <div className='max-w-4xl mx-auto mt-4 px-5'>
                {data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item._id}
                            className=" p-4 mb-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <h2 className="text-lg md:text-2xl font-ergaramond font-bold text-[#15191C]">
                                {item.title}
                            </h2>
                            <p className="text-[#15191C] font-ergaramond text-sm md:text-lg my-2">{htmlToText(item.content).slice(0, 150)}...</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-5'>
                                    <p onClick={()=>{
                                        navigate(`/write-blog/${item._id}`)
                                    }} className="text-xs md:text-sm flex items-center gap-2 text-[#7f7f80] my-2">
                                        <span><SquarePen size={16} /></span> Edit
                                    </p>
                                    <p onClick={()=>{
                                        deleteBlog(item._id)
                                        setData((prevData) => prevData.filter((itm) => itm._id !== item._id))
                                    }} className="text-xs md:text-sm flex items-center gap-2 text-red-500 my-2">
                                        <span><Trash2 size={16} /></span> Delete
                                    </p>
                                </div>

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
    )
}

export default Profile

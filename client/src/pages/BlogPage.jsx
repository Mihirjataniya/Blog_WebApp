import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { getBlogById } from '../../apis'
import { useParams } from 'react-router-dom'
import { Clock, User } from 'lucide-react'
import { convertDate } from '../utils/dateConversion'
import BlogSkeleton from '../components/BlogSkeleton'

const BlogPage = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const { id } = useParams()
    console.log();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const blogData = await getBlogById(id)
                console.log(blogData)
                setData(blogData.blog)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return (
        <div className='w-full h-full'>
            <Navbar />
            {data ? (
                <div className='max-w-4xl mx-auto my-5 h-full p-5 rounded-lg'>
                    <p className='font-ergaramond text-4xl font-bold'>
                        {data.title}
                    </p>
                    <div className='flex items-center justify-between w-full my-4'>
                        <p className="text-xs md:text-sm flex items-center gap-2 text-[#7f7f80] my-2">
                            <span><User size={16} /></span> {data.author}
                        </p>
                        <p className="text-xs md:text-sm flex items-center gap-2 text-[#7f7f80] my-2">
                            <span><Clock size={16} /></span> {convertDate(data.createdAt)}
                        </p>
                    </div>
                    <div className='flex items-center justify-end gap-2'>
                        {data.tags.map((item, index) => (
                            <span key={index} className="border-2 border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {item}
                            </span>
                        ))}
                    </div>
                    <p className='default-html text-lg font-ergaramond'>
                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </p>
                </div>
            ) : loading ? <BlogSkeleton /> : (
                <p className="text-[#15191C] flex items-center justify-center mt-18">No blog available.</p>
            )}
        </div>
    )
}

export default BlogPage

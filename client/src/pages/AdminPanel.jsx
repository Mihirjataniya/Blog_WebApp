import React, { useEffect, useState } from "react";
import { createBlog, getBlogById, updateBlog } from "../../apis";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [author, setAuthor] = useState(localStorage.getItem("user") || "");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchBlog = async () => {
            if (id) {
                try {
                    setLoading(true);
                    const response = await getBlogById(id);
                    setTitle(response.blog.title || "");
                    setContent(response.blog.content || "");
                    setTags(response.blog.tags?.join(", ") || "");
                    setAuthor(response.blog.author || localStorage.getItem("user") || "");
                } catch (error) {
                    console.log(error);
                    setMessage("Error fetching blog details");
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchBlog();
    }, [id]);

    const handleBlogSubmit = async () => {
        if (!author) {
            setMessage("Author is required.");
            return;
        }

        if (!title || !content) {
            setMessage("Title and Content are required.");
            return;
        }

        try {
            setLoading(true);
            const blogData = {
                title,
                content,
                tags: tags.split(",").map(tag => tag.trim()).filter(Boolean),
                author
            };

            if (id) {
                await updateBlog(id, blogData);
                setMessage("Blog successfully updated!");
            } else {
                await createBlog(blogData);
                setMessage("Blog successfully added!");
            }
            
            navigate("/profile");
        } catch (error) {
            console.error(error);
            setMessage(`Something went wrong while ${id ? "updating" : "adding"} the blog.`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="flex justify-center items-center min-h-[200px]">
                    Loading...
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="md:max-w-3xl max-w-sm my-6 mx-auto p-6 shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-[#15191C]">
                    {id ? "Edit Blog" : "Add Blog"}
                </h1>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter blog title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15191C]"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your blog content here"
                        rows="6"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15191C]"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="e.g., tech, programming, tutorials"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15191C]"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Enter author name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15191C]"
                    />
                </div>

                {message && <p className="text-sm text-red-500 mb-4">{message}</p>}

                <div>
                    <button
                        onClick={handleBlogSubmit}
                        disabled={loading}
                        className="px-6 py-2 bg-[#15191C] text-white rounded-lg hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
                    >
                        {loading ? "Processing..." : (id ? "Update Blog" : "Submit Blog")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
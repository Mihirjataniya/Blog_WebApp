import React from 'react'

const BlogSkeleton = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4 mb-8 animate-pulse" />
            <div className="flex items-center gap-4 mb-6">
                <div className="h-4 bg-gray-200 rounded-full w-32 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded-full w-24 animate-pulse" />
            </div>

            <div className="flex justify-end items-center flex-wrap gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((tag) => (
                    <div key={tag} className="h-8 bg-gray-200 rounded-full w-24 animate-pulse" />
                ))}
            </div>

            <div className="space-y-2 mb-12">
                <div className="h-4 bg-gray-200 rounded-full w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded-full w-11/12 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded-full w-4/5 animate-pulse" />
            </div>

            <div className="mb-8">
                <div className="h-8 bg-gray-200 rounded-lg w-48 mb-6 animate-pulse" />
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded-full w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded-full w-11/12 animate-pulse" />
                </div>
            </div>

            <div className="mb-8">
                <div className="h-8 bg-gray-200 rounded-lg w-56 mb-6 animate-pulse" />
                <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded-full w-full animate-pulse" />
                    <div className="space-y-3 pl-4">
                        <div className="h-4 bg-gray-200 rounded-full w-3/4 animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded-full w-2/3 animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded-full w-5/6 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSkeleton

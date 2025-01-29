import React from 'react'

const HomeSkeleton = () => {
    return (
        <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
            {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-white rounded-3xl p-6 shadow-sm">
                  
                    <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-4 animate-pulse" />

                    <div className="space-y-3">
                        <div className="h-2 bg-gray-200 rounded-full animate-pulse" />
                        <div className="h-2 bg-gray-200 rounded-full animate-pulse" />
                        <div className="h-2 bg-gray-200 rounded-full animate-pulse w-5/6" />
                    </div>

                    <div className="flex justify-between mt-6">
                        <div className="h-3 bg-gray-200 rounded-md w-20 animate-pulse" />
                        <div className="h-3 bg-gray-200 rounded-md w-20 animate-pulse" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeSkeleton

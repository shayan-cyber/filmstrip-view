import React from 'react'

function SkeletonLoader() {
    return (
        <div className='shadow-2xl p-6 animate-pulse bg-white w-[65vw] max-w-[65vw] border-[1px] border-[#ccc]'>

            <h1 className='text-[2rem]'>FilmStrip View </h1>
            <hr className='my-4 border-[1px]' />
            <div role="status" className="flex justify-center gap-2">
                <div className="w-[70%] h-[500px] bg-gray-300 rounded flex justify-center items-center">
                    <svg className="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div className="w-[45%]">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>

                </div>
                <span className="sr-only">Loading...</span>
            </div>


            <div className='grid grid-cols-4 gap-2 px-6 py-4 rounded-md mt-8 border-2'>

                <div>
                    <div className=" bg-gray-300 h-[150px] rounded flex justify-center items-center">
                        <svg className="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className='flex justify-center my-2'>

                        <span className='bg-gray-300 rounded-full h-4 w-16'></span>

                    </div>
                </div>
                <div>
                    <div className=" bg-gray-300 h-[150px] rounded flex justify-center items-center">
                        <svg className="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className='flex justify-center my-2'>

                        <span className='bg-gray-300 rounded-full h-4 w-16'></span>

                    </div>
                </div>
                <div>
                    <div className=" bg-gray-300 h-[150px] rounded flex justify-center items-center">
                        <svg className="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className='flex justify-center my-2'>

                        <span className='bg-gray-300 rounded-full h-4 w-16'></span>

                    </div>
                </div>
                <div>
                    <div className=" bg-gray-300 h-[150px] rounded flex justify-center items-center">
                        <svg className="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className='flex justify-center my-2'>

                        <span className='bg-gray-300 rounded-full h-4 w-16'></span>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default SkeletonLoader
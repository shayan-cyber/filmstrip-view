import React from 'react'
import { ImageData } from '../../utils/types'

function PreviewCard({ imageData }: { imageData: ImageData }) {
    return (
        <div className='flex justify-center py-6 gap-4 w-full'>
            <div className='w-[70%]'>
                <div className='shadow-xl px-4 py-2 w-full'>
                    <img src={imageData.image} className='h-[450px] w-[100%]'  />
                </div>
            </div>
            <div className='text-left w-[45%]'>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-[#555] p-1 uppercase' >

                        <h1 className='text-xs text-white'>Title</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.title}</h1>
                </div>
                <div className='border-t-[1px] border-gray-300   py-3 flex justify-start items-center gap-2'>
                    <div className=' ' >

                        <h1 className='text-xs text-black leading-6'><span className='bg-[#555] text-white p-1 uppercase '>Description</span> {imageData?.description}</h1>

                    </div>
                  
                </div>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-[#555] p-1 uppercase' >

                        <h1 className='text-xs text-white'>Cost</h1>

                    </div>
                    <h1 className='text-xs'>${imageData.cost}</h1>
                </div>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-[#555] p-1 uppercase' >

                        <h1 className='text-xs text-white'>ID#</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.id}</h1>
                </div>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-[#555] p-1 uppercase' >

                        <h1 className='text-xs text-white'>Thumbnail File</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.thumbnail.toString().split('/').pop()}</h1>
                </div>
                <div className='border-y-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-[#555] p-1 uppercase' >

                        <h1 className='text-xs text-white'>Large Image File</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.image.toString().split('/').pop()}</h1>
                </div>

            </div>

        </div>
    )
}

export default PreviewCard
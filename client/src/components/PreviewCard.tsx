import React from 'react'
import { ImageData } from '../../utils/types'

function PreviewCard({ imageData }: { imageData: ImageData }) {
    return (
        <div className='flex justify-center py-6 gap-4 w-full'>
            <div className='w-[70%]'>
                <div className='shadow-xl px-4 py-2 w-full'>
                    <img src={imageData.image} className='' height={400} width={500} />
                </div>
            </div>
            <div className='text-left'>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-black p-1 uppercase' >

                        <h1 className='text-xs text-white'>Title</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.title}</h1>
                </div>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-black p-1 uppercase' >

                        <h1 className='text-xs text-white'>Description</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.description}</h1>
                </div>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-black p-1 uppercase' >

                        <h1 className='text-xs text-white'>Cost</h1>

                    </div>
                    <h1 className='text-xs'>${imageData.cost}</h1>
                </div>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-black p-1 uppercase' >

                        <h1 className='text-xs text-white'>ID#</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.id}</h1>
                </div>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-black p-1 uppercase' >

                        <h1 className='text-xs text-white'>Thumbnail File</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.thumbnail.toString().split('/').pop()}</h1>
                </div>
                <div className='border-t-[1px] border-gray-300   py-2 flex justify-start items-center gap-2'>
                    <div className='bg-black p-1 uppercase' >

                        <h1 className='text-xs text-white'>Large Image File</h1>

                    </div>
                    <h1 className='text-xs'>{imageData.image.toString().split('/').pop()}</h1>
                </div>

            </div>

        </div>
    )
}

export default PreviewCard
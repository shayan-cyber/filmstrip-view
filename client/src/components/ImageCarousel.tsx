import React, { useState } from 'react'
import { ImageData } from '../../utils/types'

function ImageCarousel({ imageData, setSelectedImage, selectedImage }: { imageData: ImageData[], setSelectedImage: React.Dispatch<React.SetStateAction<ImageData | undefined>> , selectedImage:ImageData}) {
    const [index, setIndex] = useState(0)
    const items = 4;
    const handleNextClick = () => {
        if (index + items < imageData.length) {
            setIndex(index + items);
        }
    }
    const handlePrevClick = () => {
        if (index - items >= 0) {
            setIndex(index - items);
        }
    };

    return (
        <div className='border-2 rounded-md p-3  relative'>
            <button disabled={index === 0} className='top-1/2 absolute cursor-pointer left-2 disabled:opacity-30 disabled:cursor-not-allowed' onClick={handlePrevClick}>
                <img src="previous.png" />
            </button>
            <button disabled={index + items >= imageData.length} className='top-1/2 absolute cursor-pointer right-2 disabled:opacity-30 disabled:cursor-not-allowed' onClick={handleNextClick}>
                <img src="next.png" />
            </button>

            <div className='grid grid-cols-4 px-6 '>
                {imageData && imageData.slice(index, index + items).map((item) => {
                    return (
                        <div className='cursor-pointer group' onClick={() => setSelectedImage(item)}>
                            <div className={`hover:border-4 border-4 border-transparent rounded-md hover:border-gray-200 ${selectedImage.id === item.id && "border-red-800 hover:border-red-800"}  p-1 w-full`}>
                                <img src={item?.image} height="40" className='h-40 w-full' />
                            </div>

                            <div className='flex justify-center'>

                                <div className={`group-hover:bg-gray-300 bg-gray-200 ${selectedImage.id === item.id && "bg-red-800 group-hover:bg-red-800 text-white"} rounded-full px-4 p-1 text-center mt-2 `}>

                                    <h1 className='text-[.6rem]'> {item.thumbnail.toString().split('/').pop()}</h1>

                                </div>

                            </div>

                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default ImageCarousel
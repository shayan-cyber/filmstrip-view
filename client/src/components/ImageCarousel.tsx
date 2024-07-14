import React, { useState } from 'react'
import { ImageData } from '../../utils/types'
import { getData } from '../../utils/apiCalls';

interface props {
    imageData: ImageData[],
    setImageData: React.Dispatch<React.SetStateAction<ImageData[] | []>>,
    setSelectedImage: React.Dispatch<React.SetStateAction<ImageData | undefined>>,
    selectedImage: ImageData,
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>,
    totalPages:number
}


function ImageCarousel({ imageData, setImageData, setSelectedImage, selectedImage, page, setPage, totalPages }: props) {
    const [index, setIndex] = useState(0)
    const items = 4;


    const handleNextClick = () => {

        // calling nextpage data from server when only items=4 are left to view (for fetching the next page before the use reaches the last 4 images)
        if(page < totalPages){
            if(items+index === imageData.length - items ){
                // call again
                console.log("next page call");
                getData(page+1).then((res)=>{
                    setImageData([...imageData, ...res?.results?.items])
                    setPage(res?.results?.page)
                }).catch((e)=>{
                    console.log({e});
                    alert("Something Went Wrong")
                })
            }
        }
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
                {imageData && imageData.slice(index, index + items).map((item, key) => {
                    return (
                        <div className='cursor-pointer group' onClick={() => setSelectedImage(item)} key={key}>
                            <div className={`hover:border-4 border-4 border-transparent rounded-md hover:border-gray-200 ${selectedImage.id === item.id && "!border-red-800 "}  p-1 w-full`}>
                                <img src={item?.image}  className=' md:h-40 w-full' />
                            </div>

                            <div className='flex justify-center'>
                                <div className={`group-hover:bg-gray-300 bg-gray-200 ${selectedImage.id === item.id && "bg-red-800 group-hover:bg-red-800 text-white"} rounded-full px-2 md:px-4  p-1 text-center mt-2 `}>
                                    <h1 className='text-[.4rem] md:text-[.6rem]'> {item.thumbnail.toString().split('/').pop()}</h1>
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
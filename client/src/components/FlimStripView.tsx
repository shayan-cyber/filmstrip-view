import React from 'react'
import PreviewCard from './PreviewCard'
import { useState, useEffect } from 'react'
import { getData } from '../../utils/apiCalls'
import { ImageData } from '../../utils/types'
import { unwatchFile } from 'fs'
import ImageCarousel from './ImageCarousel'
function FlimStripView() {
  const [templateData, setTemplateData] = useState<ImageData[]>([])
  const [selectedImage, setSelectedImage] = useState<ImageData>()

  useEffect(() => {
    getData().then((res) => {
      setTemplateData(res?.results)
      if (res?.results.length > 0)
        setSelectedImage(res?.results[0])
    }).catch((e) => {
      console.log({ e });
    })

  }, [])

  return (
    <div className='shadow-2xl p-6 bg-white max-w-[65vw] w-full'>
      <h1 className='text-[2rem]'>FilmStrip View </h1>
      <hr className='my-4 border-[1px]' />
      {selectedImage && (

        <PreviewCard imageData={selectedImage} />
      )}
      {templateData && selectedImage && (

        <ImageCarousel imageData={templateData} setSelectedImage={setSelectedImage} selectedImage={selectedImage}/>
      )}

    </div>
  )
}

export default FlimStripView
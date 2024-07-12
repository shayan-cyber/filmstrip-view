import React from 'react'
import PreviewCard from './PreviewCard'
import { useState, useEffect } from 'react'
import { getData } from '../../utils/apiCalls'
import { ImageData } from '../../utils/types'

import ImageCarousel from './ImageCarousel'
import SkeletonLoader from './SkeletonLoader'
function FlimStripView() {
  const [templateData, setTemplateData] = useState<ImageData[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedImage, setSelectedImage] = useState<ImageData>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getData().then((res) => {
      setTemplateData(res?.results?.items)
      setPage(res?.results?.page)
      setTotalPages(res?.results?.totalPages)
      setLoading(false)
      if (res?.results?.items?.length > 0)
        setSelectedImage(res?.results?.items[0])
    }).catch((e) => {
      console.log({ e });
      // setLoading(false)
      alert("Something Went Wrong")
    })

  }, [])


  
  return (

    <>
      {loading ? (<SkeletonLoader/>) : (
        <div className='shadow-2xl p-6 bg-white max-w-[65vw] w-full border-[1px] border-[#ccc]'>
          <h1 className='text-[2rem]'>FilmStrip View </h1>
          <hr className='my-4 border-[1px]' />
          {selectedImage && (
            <PreviewCard imageData={selectedImage} />
          )}
          {templateData && selectedImage && (
            <ImageCarousel imageData={templateData} setImageData={setTemplateData} setSelectedImage={setSelectedImage} selectedImage={selectedImage} page={page} setPage={setPage} totalPages={totalPages} />
          )}

        </div>
      )}

    </>

  )
}

export default FlimStripView
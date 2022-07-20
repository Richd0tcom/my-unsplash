import { useState, useEffect} from 'react'
import axios from 'axios'
import Image from './Image'

interface galleryProps{
  images: Array<Object>
}

const Gallery = ({ images } :galleryProps) => {

  return (
    <div className="pt-8 px-2  md:px-12 lg:px-24 masonry-sm md:masonry-md break-inside">

       {images.map((img: any)=>{
        return <Image key={img.imageId} label={img.label} url={img.imageURL} id={img.imageId} />
       })}

    </div>

    // columns-2 md:columns-3 gap-3 md:gap-5 lg:columns-3 lg:gap-11
  )
}

export default Gallery
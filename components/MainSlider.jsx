import { Context } from '@/contextapi/Context'
import React, { useContext } from 'react'
import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const MainSlider = () => {
  const {mainSliderImages} = useContext(Context)
  return (
    <div>
      <ReactImageGallery
          items={mainSliderImages}
          autoPlay={true}
          slideInterval={5000}
          isRTL={true}
          onClick={() => alert('کلیک شد')}
      />
    </div>
  )
}

export default MainSlider
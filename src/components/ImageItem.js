import React from 'react'

const ImageItem = ({ img, altText }) => {
  return (
    <img src={img} alt={altText} />
  )
}

export default ImageItem
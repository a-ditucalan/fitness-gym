import React from "react"

const ImageItem = ({ img, altText }) => {
  return (
    <div className="img-box">
      <img src={img} alt={altText} />
    </div>
  )
}

export default ImageItem

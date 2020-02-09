import React from 'react'
import ImageItem from './ImageItem'

const ImageGrid = ({ items }) => {
  return (
    <div className="img-holder">
      {items.map((itemSrc, key) => {
        return (
          <ImageItem key={key} img={itemSrc.img} altText={itemSrc.altText} />
        )
      })}
    </div>
  )
}

export default ImageGrid
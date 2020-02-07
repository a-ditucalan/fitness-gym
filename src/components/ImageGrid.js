import React, { Fragment } from 'react'
import ImageItem from './ImageItem'

const ImageGrid = ({ ImageData, activeTab }) => {
  return (
    <Fragment>
      {ImageData.title === activeTab ? (
        <div className="img-holder">
          {ImageData.item.map((itemSrc, key) => {
            return (
              <ImageItem key={key} img={itemSrc.img} altText={itemSrc.altText} />
            )
          })}
        </div>
      ) : null}
    </Fragment>
  )
}

export default ImageGrid
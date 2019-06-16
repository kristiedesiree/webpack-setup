import React from 'react';
import PhotoCell from './PhotoCell.jsx';

let PhotoGallery = (props) => {
  let { images, selectedImage } = props;

  return (
    <div>
      This is my gallery "container" component
      <PhotoCell image={selectedImage} />
      {images.map((image, index) => {
        <PhotoCell key={index} image={image} />
      })}
    </div>
  )
  
}

export default PhotoGallery;
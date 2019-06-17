import React from 'react';
import PhotoCell from './PhotoCell.jsx';


let PhotoGallery = (props) => {
  let { images, selectedImage, selectedImageId, drag } = props;

  return (
    <div>
       {images.map((image, index) => {
          return <PhotoCell id={ index } key={ index } image={ image } selectedImage={ selectedImage } selectedImageId={ selectedImageId }/>
       })}  
  
      Gallery here
     
    </div>
  )
  
}

export default PhotoGallery;
import React from 'react';
import PhotoCell from './PhotoCell.jsx';


let PhotoGallery = (props) => {
  let { images, selectedImage, selectedImageId, clickHandler } = props;
  console.log(clickHandler)
  return (
    <div>
      <button id= "left" className="navigate" onClick={() => {clickHandler('left')}}> LEFT </button>
       {images.map((image, index) => {
          return <PhotoCell id={ index } key={ index } image={ image } selectedImage={ selectedImage } selectedImageId={ selectedImageId }/>
       })}  
      <button id="right" className="navigate" onClick={() => {clickHandler('right')}}> RIGHT </button>
      Gallery here
     
    </div>
  )
  
}

export default PhotoGallery;
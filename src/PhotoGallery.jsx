import React from 'react';
import PhotoCell from './PhotoCell.jsx';
// import { Gallery, GalleryImage } from "react-gesture-gallery";
import './swipe.scss'

let PhotoGallery = (props) => {
  let { images, selectedImage, selectedImageId, clickHandler, getDragStart, getDragEnd } = props;
 
  return (
    <div>
       <button id= "left" className="navigate" onClick={() => {clickHandler('left')}}> LEFT </button>
        {images.map((image, index) => {
           return <PhotoCell id={ index } key={ index } image={ image } selectedImage={ selectedImage } selectedImageId={ selectedImageId } getDragStart={getDragStart} getDragEnd={getDragEnd}/>
        })}  
       <button id="right" className="navigate" onClick={() => {clickHandler('right')}}> RIGHT </button>
      Gallery here
<div>

</div>

</div>

    
  )


}

export default PhotoGallery;
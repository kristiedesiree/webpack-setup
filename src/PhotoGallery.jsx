import React from 'react';
import PhotoCell from './PhotoCell.jsx';
import './style.scss'
import Flexbox from 'flexbox-react';

let PhotoGallery = (props) => {
  let { images, selectedImage, selectedImageId, clickHandler, getDragCoordinate} = props;
 
  return (
      <Flexbox className="gallery" flexDirection="row" justifyContent="center" alignItems="center">
       <button id= "left" className="navigate" onClick={() => {clickHandler('left')}}> {'<'} </button>
        {images.map((image, index) => {
           return <PhotoCell id={ index } key={ index } image={ image } selectedImage={ selectedImage } selectedImageId={ selectedImageId } getDragCoordinate={getDragCoordinate} />
        })}  
       <button id="right" className="navigate" onClick={() => {clickHandler('right')}}> {'>'} </button>
    </Flexbox>
  )
}

export default PhotoGallery;
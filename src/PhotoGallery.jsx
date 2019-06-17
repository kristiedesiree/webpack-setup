import React from 'react';
import PhotoCell from './PhotoCell.jsx';
import './style.scss'
import Flexbox from 'flexbox-react';

let PhotoGallery = (props) => {
  let { images, selectedImage, selectedImageId, changePhoto, getDragCoordinate} = props;
  let galleryContents = images.map((image, index) => {
           return <PhotoCell key={ index } id={ index } image={ image } numPhotos = {images.length} selectedImageId={ selectedImageId } getDragCoordinate={getDragCoordinate} />
  }); 

  return (
      <Flexbox className="gallery" flexDirection="row" justifyContent="center" alignItems="center">
       <button id="left" className="navigate" onClick={() => {changePhoto('left')}}> {'<'} </button>
        {galleryContents}
       <button id="right" className="navigate" onClick={() => {changePhoto('right')}}> {'>'} </button>
    </Flexbox>
  )
}

export default PhotoGallery;
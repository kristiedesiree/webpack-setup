import React from 'react';
import PhotoCell from './PhotoCell.jsx';

let PhotoGallery = (props) => {
  let { images, selectedImage } = props;
  const listImages = images.map((image, id) =>
    <PhotoCell key={id} image={image}/>
  );

  return (
    <div>
      Gallery here
     {listImages}
    </div>
  )
  
}

export default PhotoGallery;
import React from 'react';

let PhotoCell = (props) => {
  let { id, image, selectedImage, selectedImageId } = props;
  console.log('selecId', selectedImageId)
  if (id === selectedImageId) {
    return (
    <div>
     <p> {image.caption} </p>
     <img src={image.url}/>
    </div>
  )  
  } else {
    return ''
  }
  
}

export default PhotoCell;
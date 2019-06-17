import React from 'react';

let PhotoCell = (props) => {
  let { id, image, selectedImageId, numPhotos, getDragCoordinate } = props;
  if (id === selectedImageId) {
    return (
    <span id="photoViewer" onMouseDown= {()=> {getDragCoordinate(event, 'start')}} onMouseUp = {()=> {getDragCoordinate(event, 'end')}}>
     <p id="caption"> {id+1} / {numPhotos} {image.caption} </p>
     <img className="photo" src={image.url}/>
    </span>
  )  
  } else {
    return ''
  }
  
}

export default PhotoCell;
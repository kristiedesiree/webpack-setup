import React from 'react';

let PhotoCell = (props) => {
  let { id, image, selectedImageId, getDragCoordinate } = props;
  if (id === selectedImageId) {
    return (
    <span id="photoViewer" onMouseDown= {()=> {getDragCoordinate(event, 'start')}} onMouseUp = {()=> {getDragCoordinate(event, 'end')}}>
     <p> {image.caption} </p>
     <img className="photo" src={image.url}/>
    </span>
  )  
  } else {
    return ''
  }
  
}

export default PhotoCell;
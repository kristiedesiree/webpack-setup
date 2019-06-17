import React from 'react';

let PhotoCell = (props) => {
  let { id, image, selectedImageId, getDragCoordinate } = props;
  if (id === selectedImageId) {
    return (
    <div onMouseDown= {()=> {getDragCoordinate(event, 'start')}} onMouseUp = {()=> {getDragCoordinate(event, 'end')}}>
     <p> {image.caption} </p>
     <img src={image.url}/>
    </div>
  )  
  } else {
    return ''
  }
  
}

export default PhotoCell;
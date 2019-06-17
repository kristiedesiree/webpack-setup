import React from 'react';

let PhotoCell = (props) => {
  let { id, image, selectedImageId, getDragStart, getDragEnd } = props;
  if (id === selectedImageId) {
    return (
    <div onMouseDown= {()=> {getDragStart(event)}} onMouseUp = {()=> {getDragEnd(event)}}>
     <p> {image.caption} </p>
     <img src={image.url}/>
    </div>
  )  
  } else {
    return ''
  }
  
}

export default PhotoCell;
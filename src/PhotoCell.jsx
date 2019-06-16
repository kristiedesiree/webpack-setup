import React from 'react';

let PhotoCell = (props) => {
  let { image } = props;

  return (
    <div>
     This is a photo cell component
     <p> {image.caption} </p>
     <img src={image.url}/>
    </div>
  )
  
}

export default PhotoCell;
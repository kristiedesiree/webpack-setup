import React from 'react';
import sampleImages from './sampleImageGenerator.js';
import PhotoGallery from './PhotoGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: {},
      selectedImageId: null,
    }
  }

  componentDidMount() {
    this.setState({images: sampleImages, selectedImage: sampleImages[0], selectedImageId: 0}, () => {
      console.log(this.state.images)
      console.log(this.state.selectedImage)
    }
    );
  }

  render() {
    return (
      <div>
        Rendered the App component
        <PhotoGallery images={ this.state.images } selectedImage={ this.state.selectedImage } selectedImageId = {this.state.selectedImageId}/>
      </div>
    );
  }

  clickHandler(direction) {
    let currentId = this.state.selectedImageId;
    if (direction === 'left') {
      currentId-1 >= 0 ? currentId-- : currentId; 
    } else if (direction === 'right') {
      currentId+1 < this.state.images.length ? currentId++ : currentId;
    }
    
    this.setState({
      selectedImage: this.state.images[currentId],
      selectedImageId: currentId,
    });
    console.log(currentId)
  }  

  
}

export default App;
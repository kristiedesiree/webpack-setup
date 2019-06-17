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
      dragStart: null,
      dragEnd: null,
    }
    this.changePhoto = this.changePhoto.bind(this);
    this.getDragCoordinate = this.getDragCoordinate.bind(this);
  }

  componentDidMount() {
    if (sampleImages.length > 0) {
      this.setState({images: sampleImages, selectedImage: sampleImages[0], selectedImageId: 0});
    } else {
      this.setState({images: [{url: 'https://s3.amazonaws.com/FringeBucket/image_placeholder.png', caption: 'No images to display'}], selectedImage: this.state.images[0], selectedImageId: 0});
    } 
  }

  render() {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <PhotoGallery images={ this.state.images } selectedImage={ this.state.selectedImage } selectedImageId = {this.state.selectedImageId} getDragCoordinate={this.getDragCoordinate} changePhoto = { this.changePhoto } />
      </div>
    );
  }

  changePhoto(direction) {
    let currentId = this.state.selectedImageId;
    if (direction === 'left') {
      currentId-1 >= 0 ? currentId-- : currentId; 
    } else if (direction === 'right') {
      currentId+1 < this.state.images.length ? currentId++ : currentId;
    }
    
    this.setState({
      selectedImage: this.state.images[currentId],
      selectedImageId: currentId,
      dragStart: null,
      dragEnd: null
    });
  }  

  getDragCoordinate(event, type) {
    if (type === 'start') {
       this.setState({dragStart: event.screenX});
    } 
    if (type === 'end') {
      this.setState({dragEnd: event.screenX}, () => {
      this.state.dragStart - this.state.dragEnd > 0 ? this.changePhoto('left') : this.changePhoto('right');
      });
    }
  }
}

  
export default App;
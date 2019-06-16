import React from 'react';
import sampleImages from './sampleImageGenerator.js';
import PhotoGallery from './PhotoGallery.jsx';
import PhotoCell from './PhotoCell.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: {}
    }
  }



  componentDidMount() {
    this.setState({images: sampleImages, selectedImage: sampleImages[0]}, () => {
      console.log(this.state.images)
      console.log(this.state.selectedImage)
    }
    );
  }

  render() {
    return (
      <div>
        Rendered the App component
        {/* Gallery component will be rendered within the app component */}
        <PhotoGallery images={ this.state.images } selectedImage={ this.state.selectedImage } />
      </div>
    );
  }
}

export default App;
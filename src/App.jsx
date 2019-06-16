import React from 'react';
import sampleImages from './sampleImageGenerator.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: {}
    }
  }

  render() {
  return (
    <div>
      Rendered the App component
      Gallery component will be rendered within the app component
    </div>
  );
  }

  componentDidMount() {
    this.setState({images: sampleImages, selectedImage: sampleImages[0]}, () => {
      console.log(this.state.images)
      console.log(this.state.selectedImage)
    }
    );
  }
}

export default App;
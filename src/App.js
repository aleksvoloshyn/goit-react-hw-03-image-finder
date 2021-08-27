import React, { Component } from 'react';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { Modal } from './Components/Modal/Modal';
import { ImageGalleryItem } from './Components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';
import imageTest from './Data/testData.json';

import './App.css';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    // this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery toggleModal={this.toggleModal} />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageGalleryItem image={imageTest}></ImageGalleryItem>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;

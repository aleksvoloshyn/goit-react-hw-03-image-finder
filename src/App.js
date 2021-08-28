import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { Modal } from './Components/Modal/Modal';
// import { ImageGalleryItem } from './Components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';
import { Button } from './Components/Button/Button';
import imageTest from './Data/testData.json';
import { GetImagesApi } from './Components/Api/ImageApi';
// import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    showModal: false,
    pictures: [],
    searchRequest: '',
    loading: false,
    error: '',
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  getData = (request, page) => {
    GetImagesApi(request, page)
      .then(response => {
        if (response.status === 200) {
          this.setState({ pictures: response.data.hits });
        }
        if (response.status === 404) {
          throw new Error(response.message || 'pictures not exist');
        }
      })
      .catch(function (error) {
        console.error('error', error);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.getData(this.state.searchRequest, 1);
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log(this.state.searchRequest);
    console.log('componentDidUpdate');
    console.log(this.state.loading);
    console.log(this.state.searchRequest.trim().length);
    // this.state.searchRequest.trim().length !== 0;
  }

  setSearchRequest = request => {
    this.setState({ searchRequest: request });
    this.getData(request, 1);
  };

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Searchbar onSubmit={this.setSearchRequest} />

        <ImageGallery
          toggleModal={this.toggleModal}
          images={this.state.pictures}
        />
        {/* {this.state.loading && <p>Loading</p>} */}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <div>
              {imageTest.map(pic => {
                return <img key={pic.id} src={pic.avatar} alt="" />;
              })}
            </div>
          </Modal>
        )}
        <div className={'container'}>
          <Button />
        </div>
      </div>
    );
  }
}

export default App;

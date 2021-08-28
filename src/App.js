import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { Modal } from './Components/Modal/Modal';
// import { ImageGalleryItem } from './Components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';
import { Button } from './Components/Button/Button';
// import imageTest from './Data/testData.json';
import { GetImagesApi } from './Components/Api/ImageApi';
// import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    showModal: false,
    pictures: [],
    searchRequest: 'lion',
    loading: false,
    error: '',
    page: 1,
    src: '',
  };

  getData = (request, page) => {
    GetImagesApi(request, page)
      .then(response => {
        if (response.status === 200 && this.state.searchRequest.trim().length) {
          this.setState({
            pictures: [...this.state.pictures, ...response.data.hits],
          });
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
    this.getData(this.state.searchRequest, this.state.page);
  }

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  setSearchRequest = request => {
    this.setState({ pictures: [] });
    this.setState({ searchRequest: request });
    this.getData(request, this.state.page);
  };
  // page = this.state.page;
  pageIncrement = () => {
    this.setState({ page: this.state.page + 1 });

    this.getData(this.state.searchRequest, this.state.page + 1);
    return;
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  setCurrentPictureSrc = e => {
    this.setState({ showModal: !this.state.showModal });
    if (e !== undefined) {
      this.setState({ src: e.target.src });
    }
    // console.log(e.target);
  };

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Searchbar onSubmit={this.setSearchRequest} />

        <ImageGallery
          toggleModal={this.setCurrentPictureSrc}
          images={this.state.pictures}
        />
        {/* {this.state.loading && <p>Loading</p>} */}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <div>
              <img width="1000px" src={this.state.src} alt="" />
            </div>
          </Modal>
        )}
        <div className={'container'}>
          <Button onClick={this.pageIncrement} />
        </div>
      </div>
    );
  }
}

export default App;

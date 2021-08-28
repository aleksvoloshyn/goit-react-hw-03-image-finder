import React, { Component } from 'react';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { Modal } from './Components/Modal/Modal';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';
import { Button } from './Components/Button/Button';
import { GetImagesApi } from './Components/Api/ImageApi';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    showModal: false,
    pictures: [],
    searchRequest: '',
    loading: false,
    error: '',
    page: 1,
    largeImageSrc: '',
    alt: '',
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

  setSearchRequest = request => {
    this.setState({ loading: true });
    this.setState({ pictures: [] });
    this.setState({ searchRequest: request });
    this.getData(request, this.state.page);
  };

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
      this.setState({ largeImageSrc: e.target.dataset.largeimage });
      this.setState({ alt: e.target.alt });
    }
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
        {this.state.loading && (
          <Loader
            type="MutatingDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <div>
              <img src={this.state.largeImageSrc} alt={this.state.alt} />
            </div>
          </Modal>
        )}

        {this.state.pictures.length > 0 && (
          <div className={'container'}>
            <Button onClick={this.pageIncrement} />
          </div>
        )}
      </div>
    );
  }
}

export default App;

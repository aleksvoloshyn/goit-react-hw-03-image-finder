import React, { Component } from 'react';
import { ImageGalleryItem } from './../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <div>
      <ul className={styles.ImageGallery}>
        <ImageGalleryItem toggle={toggleModal} images={images} />
      </ul>
    </div>
  );
};

export { ImageGallery };

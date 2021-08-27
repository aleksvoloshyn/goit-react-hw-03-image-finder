// import React, { Component } from 'react';
import { ImageGalleryItem } from './../ImageGalleryItem/ImageGalleryItem';
import imageTest from './../../Data/testData.json';

import styles from './ImageGallery.module.css';

function ImageGallery({ toggleModal }) {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem toggle={toggleModal} image={imageTest} />
    </ul>
  );
}

export { ImageGallery };

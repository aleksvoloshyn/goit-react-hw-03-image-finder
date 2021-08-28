// import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ toggle, images }) => {
  return (
    <>
      {images.map(item => {
        return (
          <li onClick={toggle} className="ImageGalleryItem" key={item.id}>
            <img
              src={item.largeImageURL}
              alt=""
              className={styles.ImageGalleryItem__image}
            />
          </li>
        );
      })}
    </>
  );
};

export { ImageGalleryItem };

import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ toggle, image, id }) {
  return (
    <>
      {image.map(item => {
        return (
          <li onClick={toggle} className="ImageGalleryItem" key={item.id}>
            <img
              src={item.avatar}
              alt=""
              className={styles.ImageGalleryItem__image}
            />
          </li>
        );
      })}
    </>
  );
}

export { ImageGalleryItem };

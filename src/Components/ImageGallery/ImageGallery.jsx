import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export { ImageGallery };

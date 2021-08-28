import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ toggle, images }) => {
  return (
    <>
      {images.map(item => {
        return (
          <li onClick={toggle} className="ImageGalleryItem" key={uuidv4()}>
            <img
              src={item.webformatURL}
              alt={item.tags}
              className={styles.ImageGalleryItem__image}
              data-largeimage={item.largeImageURL}
            />
          </li>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  toggle: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export { ImageGalleryItem };

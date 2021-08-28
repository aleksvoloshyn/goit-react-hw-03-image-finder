import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ toggle, images }) => {
  return (
    <>
      {images.map(item => {
        return (
          <li onClick={toggle} className="ImageGalleryItem" key={item.id}>
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

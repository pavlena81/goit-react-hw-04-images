import PropTypes from 'prop-types';

import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItems } from 'components/ImageGalleryItem/ImageGalleryItem'; 

export const ImageGallery = ({ images }) => {
  
 
  return (
    <ImageGalleryList>
      {images.length > 0 &&
        images.map(({ id, webformatURL, largeImageURL, tags}) => (
          
            <ImageGalleryItems
            key={id}
            webformatURL = {webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
           
            />
          
        ))}
    </ImageGalleryList>
  );
};


ImageGallery.propTypes = {
  images:  PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
}
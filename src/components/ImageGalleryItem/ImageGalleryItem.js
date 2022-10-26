import PropTypes from 'prop-types';
import { ImageGalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';


  


export const ImageGalleryItems = ({ webformatURL, largeImageURL, tags}) => {
   
  return (
    <ImageGalleryItem>
    
      <ImageGalleryItemImage
                    small={webformatURL}
                    large={largeImageURL}
                    alt={tags}
                             /> 
    </ImageGalleryItem>
  ); 
  
};





ImageGalleryItems.propTypes = {
 
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
 
}
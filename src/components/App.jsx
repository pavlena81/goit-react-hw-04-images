import {useState, useEffect } from "react";
// import axios from "axios";

import {getImages} from 'service/service';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from "./ImageGallery/ImageGallery"; 
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";



export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  
  const handleSubmit = searchInput => {
        
    setPage(1);
    setImages([]);
    setQuery(searchInput);
    
    // e.target.reset();
    console.log(searchInput);
  }

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
      
    
  };

  useEffect(() => {    
    
    const getPhotos = async (query, page) => {    
    if (!query) {
      return;
    }
    try {
      // this.setState({ isLoading: true });

      const data = await getImages(query, page);
      if (data.hits.length === 0 && images.length === total) {
        toast.warn('Sorry, there are no images matching your search query. Please try again.');
      }
      if (page === 1) {
        
          setTotal(data.total);
          setImages([...data.hits]);
          setIsLoading(true);       

      } else {

        setImages([...images, ...data.hits]);       
        
      }
      } catch (error) {
         toast.error('Sorry, wrong request, try update the page')
      // this.setState({ error });
      } finally {
        setIsLoading(false);
    }
  };
       
    getPhotos(query, page);
      console.log('query');
    
  }, [query, page, images, total]);

   
    
    return (
      <div>
        
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && <Loader/>}
        <ImageGallery images = {images}/>
        {/* {images.length > 0 ? <ImagesList images={images} /> : null } */}
        {images.length > 0 && <Button loadMore={loadMore} />}
        {/* {isLoading && <Loader/>} */}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }














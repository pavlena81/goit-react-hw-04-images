import { Component } from "react";
// import axios from "axios";

import {getImages} from 'service/service';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from "./ImageGallery/ImageGallery"; 
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";



export class App extends Component {

  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    total:0,
  };

  handleSubmit = searchInput => {
    
    this.setState({  
      page: 1,
      images:[],
      query: searchInput
    });
    // e.target.reset();
    console.log(searchInput);
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (
      prevState.page !== page ||
      prevState.query !== query
    ) {
      console.log('query');
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {    
    if (!query) {
      return;
    }
    try {
      this.setState({ isLoading: true });

      const data = await getImages(query, page);
      if (data.hits.length === 0) {
        toast.warn('Sorry, there are no images matching your search query. Please try again.');
      }
      if (page === 1) {
        this.setState({
          total: data.total,
          images: data.hits,
          isLoading: false,
        });

      } else {

        this.setState(state => ({
          images: [...state.images, ...data.hits],
        }));
      }

    } catch (error) {
      toast.error('Sorry, wrong request, try update the page')
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
   


    render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader/>}
        <ImageGallery images = {images}/>
        {/* {images.length > 0 ? <ImagesList images={images} /> : null } */}
        {images.length > 0 && <Button loadMore={this.loadMore} />}
        {/* {isLoading && <Loader/>} */}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}












// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

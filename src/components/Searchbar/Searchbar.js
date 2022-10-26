import { useState } from "react";
 import PropTypes from 'prop-types';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { FaSearch } from "react-icons/fa";

import {
    HeaderSearchbar,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput,
} from "./Searchbar.styled";

export const Searchbar = ({onSubmit})=> {
  const [searchInput, setSearchInput] = useState('');
  

 const handleInput = (e) => {
   setSearchInput( e.target.value.trim());
};

 const handleSubmit = (e) => {  
  e.preventDefault();
   if (searchInput.trim() === '') {
         return toast.error('enter search');
      }
      
    

    onSubmit(searchInput)
    console.log(searchInput)
};

  
    return (
  <HeaderSearchbar>
  <SearchForm onSubmit={handleSubmit}>
    <SearchFormButton  type="submit">
      <SearchFormButtonLabel><FaSearch color = '#3f51b5' /></SearchFormButtonLabel>
    </SearchFormButton >

    <SearchFormInput
      onChange={handleInput}
      type="text"
      value={searchInput}
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      
    />
  </SearchForm>
</HeaderSearchbar>
    );
  }




Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  
}
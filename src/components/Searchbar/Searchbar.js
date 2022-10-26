import { Component } from "react";
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

export class Searchbar extends Component {
  
  state = {
    searchInput: '',
  };

handleInput = (e) => {
  this.setState({ searchInput: e.target.value.trim() });
};

handleSubmit = (e) => {  
  e.preventDefault();
    if (this.state.searchInput.trim() === '') {
        return toast.error('enter search');
   } 

  this.props.onSubmit(this.state.searchInput)
  console.log(this.state.searchInput)
};

  render() {
    return (
  <HeaderSearchbar>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchFormButton  type="submit">
      <SearchFormButtonLabel><FaSearch color = '#3f51b5' /></SearchFormButtonLabel>
    </SearchFormButton >

    <SearchFormInput
      onChange={this.handleInput}
      type="text"
      value={this.state.searchInput}
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      
    />
  </SearchForm>
</HeaderSearchbar>
    );
  }
}



Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  
}
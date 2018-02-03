import React from 'react';
import  { connect } from 'react-redux';
import './userinput.css';

export class UserLocation extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const value = this.input.value.toLowerCase();
    window.location.href = "/search-results/" + value;
  }
  
  render() {
    return (
      <form 
        id='search-form'
        onSubmit={(e) => {
          this.handleSubmit(e)}}>
        <input 
          id="search-input"
          type='text' 
          name='userLocation' 
          ref={input => this.input = input}
          required 
          placeholder='Atlanta'/>
        <button 
          type='submit' 
          name='Search' 
          id='searchButton' 
          className='searchButton'>
          Search</button>
      </form>
    )
  }
  
}

export default connect()(UserLocation)

//indentions and Google React prettyifier 
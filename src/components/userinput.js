import React from 'react';
import { connect } from 'react-redux';
import { fetchConcerts } from '../actions/concerts';
import './userinput.css';
import { Link } from 'react-router-dom';


export class UserLocation extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const value = this.input.value.toLowerCase();
    this.props.dispatch(fetchConcerts(value));
    // window.location.href = "/search-results";
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
      <Link to="/search-results">
      <div>
        Test
      </div>
      </Link>
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
import React from 'react';
import { connect } from 'react-redux'
import ShareEvent from './shareevent';
import './concertdetails.css';
import { selectConcert } from '../actions/concerts';
import { showModal } from '../actions/modal';
import { fetchConcerts } from '../actions/concerts';

export class ConcertDetails extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchConcerts(this.props.match.params.id));
  }

  handleActions = (concert) => {
    this.props.dispatch(selectConcert(concert));
    this.props.dispatch(showModal());    
  }

      render() {
        const list = this.props.concerts.map((concert, index) => {
          return (
            <li key={concert.id}>
            <div>{concert.name}</div>
            <div>{concert.classifications[0].genre.name}</div>
            <div>{concert.dates.start.localDate}</div>
            <div>{concert.dates.start.localTime}</div>
            <div><a target='_blank' href={concert.url}><button>Buy Tickets</button></a></div>
            <div><button 
              onClick={() => this.handleActions(concert)}
            >Share</button></div>
            <div><ShareEvent /></div>
            </li>
        )});
        return (
        <ul className='concert-results'>{list}</ul>
        )
    }     
}

const mapStateToProps = function(state){
    return {
        concerts: state.concerts || []
    }
}

export default connect(mapStateToProps)(ConcertDetails)

//fix indentions

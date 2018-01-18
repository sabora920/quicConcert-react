import React from 'react';
import {Route} from 'react-router-dom';
import ConcertList from './components/concert-list'
import ConcertDetails from './components/concertdetails'

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ ConcertList } />
        <Route exact path="/search-results" component={ConcertDetails} />
      </div>
    )
  }
}
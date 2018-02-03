import React from 'react';
import './usereventdetails-view.css';
import { fetchLinkSuccess } from '../actions/eventlinks';

export class UserEventDetailsView extends React.Component {
componentWillReceiveProps(nextProps) {
  console.log(nextProps)
}

  render() {
    return (    
      <div>
        <UserEventDetails />
      </div>
    )
  }
}


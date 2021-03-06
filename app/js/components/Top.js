'use strict';

import React, {Component} from 'react';
import {removeSearch} from '../actions/SearchActions';
import SearchBox from './SearchBox';

class Top extends Component {

  constructor(props) {
      super(props);
  }

  _handleClose() {
    removeSearch();
  }

  render() {
    return <div className='top'>
                <div className='title'><span><strong>Magic</strong>Playlist /</span></div>
                <div className='search'><SearchBox value={this.props.search} country={this.props.country}/></div>
            </div>
  }
}

export default Top;

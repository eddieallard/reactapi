import React, { Component } from 'react';
import SingleSide from './SingleSide';
import App from '../App';
import News from './News';

  class SideNews extends Component {
    render() {
      return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4">
            <a href="#" className="bran-logo center">My Feed</a>
          </div>
        </nav>
      </div>
        <div className="row">
          <div className="col 8">
            <News />
          </div>
        <div className="col s4">
          <SideNews />
    </div>
    </div>
    </div>
    );
    }
  }
    


export default App;

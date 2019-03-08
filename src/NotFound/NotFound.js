import React, { Component } from 'react';
import MainContainer from '../MainContainer/MainContainer';

class NotFound extends Component {
  render() {
    return (
      <MainContainer>
        <h1 className="page-header">Not Found</h1>
        <div className="row">
          <br/><br/>
          <strong>Page Not Found</strong>
        </div>
      </MainContainer>
    );
  }
}

export default NotFound;
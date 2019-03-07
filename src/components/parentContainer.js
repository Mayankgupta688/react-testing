import React, { Component } from 'react';

export default class ParentContainer extends Component {
  render() {
    return (
      <>
      <div class="row">
          <div class="col">
            <img class="logo_image" src="./images/logo.jpg" alt="This is Logo" />
          </div>
        </div>
        <div class="row">
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
        </div>
      </>
    )
  }
}

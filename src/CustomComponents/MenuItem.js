import React, { Component } from 'react';
import "./MenuItem.css";

export default class MenuItem extends Component {

  render() {
    return(
        <div className="menuItem">{this.props.text}
            <hr className="hr"></hr>
        </div>
    )
  }

}
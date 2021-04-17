import React, { Component } from 'react';
import "./MenuItem.css";
import {
  Link,
  useHistory
} from "react-router-dom";

export default function MenuItem(props){
  const history = useHistory();


  function navigate() {
    //this.setState({changePage:true})
    history.push(props.text);
  }


  return(
      <div className="menuItem" onClick={navigate}>{props.text}
           <hr className="hr"></hr>
      </div>
    )
  

}
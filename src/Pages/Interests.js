import React, { Component } from 'react';

import "./Interests.css";
import "../universalStyles.css";

import guitar from "../Media/guitar.JPG";
import album from "../Media/album.JPG";
import {
  Link,
  useHistory
} from "react-router-dom";

export default function Interests(props){
  const history = useHistory();


  function navigate() {
    //this.setState({changePage:true})
    history.push(props.text);
  }


  return(
      <div className="row alignFlexStart">
        <div className="interestsLeft">
          <div className="header textcenter" >Interests</div>
          <div className="statement smallPad">Playing guitar and listening to music are two of my favorite things to do. 
                                    Music motivates and inspires me throughout the day while playing guitar is a great way to decompress.
                                    </div>
        </div>
        <div className="interestsRight">
          <img className="guitarPhoto" src={guitar}/>
          <img className="guitarPhoto" src={album}/>
          <div className="statement">I started a vinyl collection a few years ago.</div>
        </div>
          

      </div>
    )
  

}
import React, { Component } from 'react';

import "../universalStyles.css";
import ImgMediaCard from "../CustomComponents/MaterialUI/ImgMediaCard";
import guitar from "../Media/guitar.JPG";
import album from "../Media/album.JPG";
import paper from "../Media/paper.jpg";
import {
  Link,
  useHistory
} from "react-router-dom";

export default function WorkExperience(props){

  const history = useHistory();


  function navigate() {
    //this.setState({changePage:true})
    history.push("CurrentExperience");
  }


  return(
    <div>
      <div className="row alignCenter justifyCenter smallPad">
        <div onClick = {navigate}>
        <ImgMediaCard img={paper} imgTitle="Current" 
                      header="Current Experiences" 
                      description="Where I am now" 
                      cardWidth = "776"
                      backgroundColor = "dark"
                      />
        </div>
        
        <ImgMediaCard img={guitar} imgTitle="Past" 
                      header="Past Experiences" 
                      description="Places I've worked in the past" 
                      cardWidth = "776"
                      backgroundColor = "dark"/>


    </div>
    "Writing" by jjpacres is licensed with CC BY-NC-ND 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/2.0/
    </div>
    )
  

}
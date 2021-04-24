import React, { Component } from 'react';

import "../universalStyles.css";
import SimpleAccordion from "../CustomComponents/MaterialUI/SimpleAccordian";
import guitar from "../Media/guitar.JPG";
import album from "../Media/album.JPG";
import paper from "../Media/paper.jpg";


export default function WorkExperience(props){

  return(
    <div>
      <div className="row flexCol alignCenter justifyCenter smallPad">
        
      <SimpleAccordion header= "TA" subheader = "University at Buffalo"/>
      <SimpleAccordion header= "Software Engineer" subheader = "Sonet Inc"/>

    </div>
    
    </div>
    )
  

}
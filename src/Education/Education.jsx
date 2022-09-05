import { useState } from "react";
import "./Education.scss";


const Education = ({
  school,
  bgcolor,
  textcolor,
  image,
  gpa,
  degree,
  major,
}) => {
  
  

  return (
    <div className="education">
      <div className="educard">
        <div style={{backgroundColor: bgcolor, color: textcolor}} className="front">
        <img src={image}></img>
        </div>
        <div style={{backgroundColor: bgcolor, color: textcolor, boxShadow: "0px 0px 10px 15px " + bgcolor}} className="back">
        <h2>{school}</h2>
        <h4>{major}</h4>
        <h5>{degree}</h5>
        
        <h5>GPA: {gpa}</h5>
        </div>
      </div>
    </div>
  );
};

export default Education;

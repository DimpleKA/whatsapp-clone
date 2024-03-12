import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="person">
      <div className="person-left">
        <img
          src={props.imgsrc}
          alt="dp"
        />
      </div>
      <div className="person-right">
        <div className="person-right-detail-container">
          <div className="person-right-top">
            <div className="person-right-top-name">{props.name}</div>
            <div className="person-right-top-time">{props.date}</div>
          </div>
          <div className="person-right-bottom">
            <div>{props.lastmes}</div>
            <div className="round-m-count">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;

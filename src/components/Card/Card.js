import React, { Component } from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${props.monster.id}`}></img>
      <div className="container">
        <h2 className="roboname">{props.monster.name}</h2>
        <p>{props.monster.email}</p>
      </div>
    </div>
  );
};

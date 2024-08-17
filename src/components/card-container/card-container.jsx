import React, { Component } from "react";
import "./card-container.styles.css";

export default class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set4&size=300x300`}
          alt={`cat ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

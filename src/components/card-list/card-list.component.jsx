import React, { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster} />;
        })}
      </div>
    );
  }
}

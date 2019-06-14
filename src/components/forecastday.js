import React from "react";

export default class Forcastday extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { day } = this.props;
    if (!day) return null;
    return (
      <div className="forcastday-container">
        
        <div className="date">Date: {day.date}</div>
        <div className="image">
          <img src={day.day.condition.icon} />
        </div>
        <div className="text">Average: {day.day.avgtemp_c}</div>
        <div className="muted-text">{day.day.condition.text}</div>
      </div>
    );
  }
}
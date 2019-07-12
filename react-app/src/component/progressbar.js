import React, { Component } from "react";
import "./style.css";
class ProgressBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="progress-bar">
          <div
            className="filler"
            style={{
              width: `${this.props.percentage}%`,
              background: `${this.props.background}`
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ProgressBar;

import React, { Component } from "react";
import ProgressBar from "./progressbar";
import Select from "react-select";

class ProgressBars extends Component {
  state = {
    bars: [
      { label: "#bar 1", value: 0, color: "#1da598" },
      { label: "#bar 2", value: 0, color: "#1da598" },
      { label: "#bar 3", value: 0, color: "#1da598" },
      { label: "#bar 4", value: 0, color: "#1da598" }
    ],
    bar: { label: "#bar 1", value: 0, color: "#1da598" }
  };

  render() {
    return (
      <div align="center">
        <h1>Progress Bar Demo</h1>

        {this.state.bars.map(bar => (
          <ProgressBar
            key={bar.label}
            percentage={bar.value}
            background={bar.color}
          />
        ))}
        <span>
          <Select
            className="dropdown"
            options={this.state.bars}
            onChange={this.onBarChange}
          />
        </span>
        <div align="center">
          <button
            onClick={() => this.handle(+25)}
            className="btn btn-primary button"
          >
            +25
          </button>
          <button
            onClick={() => this.handle(+10)}
            className="btn btn-primary button"
          >
            +10
          </button>
          <button
            onClick={() => this.handle(-10)}
            className="btn btn-primary button"
          >
            -10
          </button>
          <button
            onClick={() => this.handle(-25)}
            className="btn btn-primary button"
          >
            -25
          </button>
        </div>
      </div>
    );
  }

  handle = num => {
    const sum = num + this.state.bar.value;
    const bars = [...this.state.bars];
    const index = this.state.bars.indexOf(this.state.bar);

    if (sum < 0 || sum > 100) {
      console.log("can't go below zero", sum);

      if (sum < 0) {
        this.state.bar.value = 0;
      } else {
        this.state.bar.value = 100;
        this.state.bar.color = "#F00";
      }
    } else {
      console.log("count so far", sum);
      this.state.bar.color = "#1da598";
      this.state.bar.value = this.state.bar.value + num;
    }
    this.state.bars[index] = { ...this.state.bar };
    this.setState({ bars });
  };

  onBarChange = bar => {
    console.log("onBarChange invoked ", bar.label, bar.value);
    this.setState({ bar: bar });
  };
}
export default ProgressBars;

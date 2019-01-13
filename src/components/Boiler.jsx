import React, { Component } from "react";
import axios from "axios";
import * as D3 from "d3";

import { Indicator } from "./Indicator";
import { Bubble } from "./Bubble";

const dataSet = [
  { name: "channel one" },
  { name: "channel two" },
  { name: "channel three" }
];

export class Boiler extends Component {
  state = {
    data: [...dataSet]
  };

  async componentDidMount() {
    const { data } = axios.get();
  }

  render() {
    const { data, width, height } = this.state;
    return (
      <div>
        <Indicator channels={data} />
        <div id="canva-container" ref={ref => (this.canva = ref)}>
          <svg id="boiler" width={width} height={height}>
            <Bubble />
          </svg>
        </div>
      </div>
    );
  }
}

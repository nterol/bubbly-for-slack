import React, { PureComponent } from "react";

export class List extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <>
        <p>Some stuff are happening in :</p>
        <ul>
          {list.map(e => (
            <li>{`#${e}`}</li>
          ))}
        </ul>
      </>
    );
  }
}

export class Indicator extends PureComponent {
  getTemp = nb => {
    if (nb === 0) return ["cold", "❄"];
    if (nb >= 1 && nb <= 4) return ["heating up", "️🔥"];
    if (nb > 4) return ["definitely hot", "️🔥🔥🔥"];
  };
  render() {
    const { channels } = this.props;
    const temperature = this.getTemp(channels.length);
    return (
      <div>
        <h1>{`Hey ! things are ${temperature
          .toString()
          .replace(",", " ")} around here`}</h1>

        {temperature[0] === "cold" ? (
          <p>Maybe come back later...</p>
        ) : (
          <List list={channels.map(({ name }) => name)} />
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => {
          return <Counter 
                        key={counter.id} 
                        value={counter.value}
                        id={counter.id}
            >
                <h4>Counter id from Counters state #{counter.id}</h4>
            </Counter>;
        })}
      </div>
    );
  }
}

export default Counters;
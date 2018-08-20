import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button 
          className="btn bn-secondary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>

        {this.props.counters.map(counter => {
          return <Counter 
                        key={counter.id} 
                        counter={counter}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
            />;
        })}
      </div>
    );
  }
}

export default Counters;

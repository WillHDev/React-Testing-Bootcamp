import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };
  countIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 0
  //     };

  //     increment() {
  // this.setState({
  //       this.state.count: this.state.count +1
  // });
  //     };

  render() {
    const { count } = this.state;
    return (
      <div className="JELLO">
        <button data-testid="counter-button" onClick={this.countIncrement}>
          {count}
        </button>
      </div>
    );
  }
}

//onClick={ () => {this.increment()}}

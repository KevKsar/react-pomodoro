import React, { Component } from "react";

class ManualIncrementer extends Component {

  constructor(props) {
    super(props)
    this.state = { n: 0 }

  }

  manIncrement(e) {
    e.preventDefault()
    // this.setState((state, props) => ({ n: state.n + props.step}));
  }

  manDecrement(e) {
    //disallow the default behavior
    e.preventDefault()

  }
  render() {
    return (<div>
      <button className="manSetTime" onClick={this.manDecrement.bind(this)}> - </button>
      {this.state.n}
      <button className="manSetTime" onClick={this.manIncrement.bind(this)}> + </button>
    </div>)
  }
}


export default ManualIncrementer;
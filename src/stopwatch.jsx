import React, { Component } from 'react';
import './app.css';

class Stopwatch extends Component{
  constructor(props){
    super(props);
    this.state = {
      timeLeft: 0
    };
    this.interval = NaN;
  };

  componentWillMount(){
    clearInterval(this.interval);
    this.updateTimeLeft(this.props.timeLeft)
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      this.getTimeLeft(this.state.timeLeft);
    }, 1000)
  }

  updateTimeLeft(thetime){
    this.setState({timeLeft: thetime});
  }

  getTimeLeft(currentTime){
    if (this.state.timeLeft > 0){
      this.setState({timeLeft: currentTime - 1});
    } else {
      alert("Time up!");
      clearInterval(this.interval);
    }
  }

  leading(num){
    return num < 10 ? '0'+num : num;
  }

  render(){
    return (
      <div>
          <div className="stopwatch">{this.leading(this.state.timeLeft)}'s left</div>
      </div>
    );
  };
};



export default Stopwatch;

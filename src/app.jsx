import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Clock from './clock';
import Stopwatch from './stopwatch';
import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
      timeLeft: 60,
      newtimeLeft: 0
    };
  };

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline})
  };

  changetimeLeft(){
    this.setState({timeLeft: this.state.newtimeLeft})
  }

  render(){
    return (
      <div className="app">
        <div className="app-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={()=>this.changeDeadline()}>Submit</Button>
        </Form>

        <div className="app-title">Stopwatch</div>
        <Stopwatch timeLeft={this.state.timeLeft}/>
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="input time"
            onChange={event => this.setState({newtimeLeft: Number(event.target.value)})}
          />
          <Button onClick={()=>this.changetimeLeft()}>Submit</Button>
        </Form>
      </div>
    );
  };
};

export default App;

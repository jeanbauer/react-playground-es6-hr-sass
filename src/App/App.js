import React from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import ListTodo from '../Components/ListTodo.js';
import './App.scss';

const data = [];

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data };
    this.createTodo = this.createTodo.bind(this);
  }
  createTodo(e) {
    if(e.which != 13) return;
    e.preventDefault();
    const description = e.target.value;
    data.push({ description, 'time': new Date().getMilliseconds()});
    this.setState({ data });
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">React TODO, try me!</h1>
        <Input cb={this.createTodo} label="Write a new todo" />
        <ListTodo data={this.state.data}/>
      </div>
    )
  }
}

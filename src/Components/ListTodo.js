import React from 'react';
import Todo from './Todo.js';

const ListTodo = (props) => (
  <div className="group">
    {props.data.length ? props.data.map((e,key) => <Todo key={key} time={e.time} description={e.description} />) : 0}
  </div>
);

export default ListTodo;

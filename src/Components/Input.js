import React from 'react';
import './Input.scss';

const Input = (props) => (
  <div className="group">
    <input onKeyUp={(e) => props.cb(e)} type="text" required />
    <span className="highlight"></span>
    <span className="bar"></span>
    <label>{props.label}</label>
  </div>
);

export default Input;

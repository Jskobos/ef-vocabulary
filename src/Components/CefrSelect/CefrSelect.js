import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import './CefrSelect.css';

class CefrSelect extends Component {
  render() {
    return(
      <FormControl componentClass="select"
        className="select-input"
        onChange={this.props.onChange}>
        <option value="0">A1</option>
        <option value="1">A2</option>
        <option value="2">B1</option>
        <option value="3">B2</option>
        <option value="4">C1</option>
        <option value="5">C2</option>
      </FormControl>
    )
  }
}

export default CefrSelect;

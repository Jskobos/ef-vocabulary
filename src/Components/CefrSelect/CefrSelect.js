import React from 'react';
import { FormControl } from 'react-bootstrap';
import './CefrSelect.css';

const CefrSelect = (props) => {
  return(
    <FormControl componentClass="select"
      className="CefrSelect select-input"
      name="cefr"
      onChange={props.onChange}>
      value={props.value}>
      <option value="0">A1</option>
      <option value="1">A2</option>
      <option value="2">B1</option>
      <option value="3">B2</option>
      <option value="4">C1</option>
      <option value="5">C2</option>
    </FormControl>
  )
}

export default CefrSelect;

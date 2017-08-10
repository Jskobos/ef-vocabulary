import React, { Component } from 'react';
import './FormRow.css';


class FormRow extends Component {
  constructor() {
    super()
    this.state = {
      feedback: false,
      cefr: 0,
      book: '',
      unit: '',
      part: '',
      word: '',
      set: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getValidState() {
    let valid = true;
    if (this.state.word.length < 1 || this.state.book.length < 1 || this.state.unit.length < 1) {
      valid = false;
    }
    else if (isNaN(this.state.unit) || isNaN(this.state.book)) { valid = false; }
    return valid;
  }

  validateWordField() {
    if (!this.state.feedback) return null;
    else if (this.state.word.length > 0) return 'success';
    else return 'error';
  }

  validateUnitField() {
    if (!this.state.feedback) return null;
    else if (this.state.unit.length > 0 && !isNaN(this.state.unit)) return 'success';
    else return 'error';
  }

  validateBookField() {
    if (!this.state.feedback) return null;
    else if (this.state.book.length > 0 && !isNaN(this.state.book)) return 'success';
    else return 'error';
  }
  render() {
    return (
      <tr className="FormRow">
      </tr>
    )
  }
}


export default FormRow;

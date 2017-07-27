import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import CefrSelect from '../CefrSelect/CefrSelect';
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
    this.addVocabEntry = this.addVocabEntry.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    switch(name) {
      case 'word': this.setState({ word: e.target.value }); break;
      case 'set' : this.setState({ set:  e.target.value }); break;
      case 'part': this.setState({ part: e.target.value }); break;
      case 'book': this.setState({ book: e.target.value }); break;
      case 'unit': this.setState({ unit: e.target.value }); break;
      default:     this.setState({ cefr: e.target.value });
    }
  }

  addVocabEntry() {
    let state = this.getValidState();
    if (!state) {
      this.setState({feedback:true});
      return;
    }
    const tags = this.state.set.split(',');
    const entry = {
      word: this.state.word,
      part: this.state.part,
      tags: tags,
      book: this.state.book,
      unit: this.state.unit,
      cefr: this.state.cefr
    }
    this.props.addVocabEntry(entry);
    this.setState({
      word:'',
      set:'',
      part:'',
      feedback: false
    })
  }

  getValidState() {
    let state = true;
    if (this.state.word.length < 1 || this.state.part.length < 1 || this.state.book.length < 1 || this.state.unit.length < 1) {
      state = false;
    }
    else if (isNaN(this.state.unit) || isNaN(this.state.book)) { state = false; }
    return state;
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

  validatePartField() {
    if (!this.state.feedback) return null;
    else if (this.state.part.length > 1) return 'success';
    else return 'error';
  }


  render() {
    return (
      <tr className="FormRow">
          <td>
            <FormGroup validationState={this.validateWordField()}>
              <FormControl
                name="word"
                className="row-input-long"
                type="text"
                value={this.state.word}
                onChange={this.handleChange}
              />
            </FormGroup>
          </td>
          <td>
            <FormGroup validationState={this.validatePartField()}>
              <FormControl
                name="part"
                className="row-input-med"
                type="text"
                value={this.state.part}
                onChange={this.handleChange}
              />
            </FormGroup>
          </td>
          <td><FormControl
                name="set"
                className="row-input-long"
                type="text"
                value={this.state.set}
                onChange={this.handleChange}
              />
          </td>
          <td>
            <FormGroup validationState={this.validateBookField()}>
              <FormControl
                name="book"
                className="row-input"
                type="text"
                value={this.state.book}
                onChange={this.handleChange}
              />
            </FormGroup>
          </td>
          <td>
            <FormGroup validationState={this.validateUnitField()}>
              <FormControl
                name="unit"
                className="row-input"
                type="text"
                value={this.state.unit}
                onChange={this.handleChange}
              />
            </FormGroup>
          </td>
          <td><CefrSelect onChange={this.handleChange} value={this.state.cefr}/></td>
          <td><Button bsStyle="primary" onClick={this.addVocabEntry}>Add</Button></td>
      </tr>
    )
  }
}


export default FormRow;

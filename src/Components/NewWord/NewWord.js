import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import CefrSelect from '../CefrSelect/CefrSelect';
import FormRow from '../FormRow/FormRow';
import './NewWord.css';


class NewWord extends FormRow {
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
    this.addVocabEntry = this.addVocabEntry.bind(this);
  }

  addVocabEntry() {
    let valid = this.getValidState();
    if (!valid) {
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
      cefr: this.state.cefr || 6
    }
    this.props.addVocabEntry(entry);
    this.setState({
      word:'',
      set:'',
      part:'',
      feedback: false
    })
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
            <FormGroup>
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


export default NewWord;

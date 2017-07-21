import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import CefrSelect from '../CefrSelect/CefrSelect';
import './FormRow.css';


class FormRow extends Component {
  constructor() {
    super()
    this.state = {
      cefr: 1,
      book: 1,
      unit: 1,
      part: 'adjective',
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
      case 'cefr': this.setState({ cefr: e.target.value }); break;
      default: return;
    }
  }

  addVocabEntry() {
    const entry = {
      word: this.state.word,
      part: this.state.part,
      set: this.state.set,
      book: this.state.book,
      unit: this.state.unit,
      cefr: this.state.cefr
    }
    this.props.addVocabEntry(entry);
    this.setState({
      word:'',
      set:''
    })
  }


  render() {
    return (
      <tr className="FormRow">
          <td><FormControl name="word" className="row-input-long" type="text" value={this.state.word} onChange={this.handleChange}/></td>
          <td><FormControl name="set" className="row-input-long" type="text" value={this.state.set} onChange={this.handleChange}/></td>
          <td><FormControl name="part" className="row-input-long" type="text" value={this.state.part} onChange={this.handleChange}/></td>
          <td><FormControl name="book" className="row-input" type="text" value={this.state.book} onChange={this.handleChange}/></td>
          <td><FormControl name="unit" className="row-input" type="text" value={this.state.unit} onChange={this.handleChange}/></td>
          <td><CefrSelect onChange={this.handleChange} value={this.state.cefr}/></td>
          <td><Button onClick={this.addVocabEntry}>Add</Button></td>
      </tr>
    )
  }
}


export default FormRow;

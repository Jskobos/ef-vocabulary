import React from 'react';
import FormRow from '../FormRow/FormRow';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import CefrSelect from '../CefrSelect/CefrSelect';
import './EditWord.css';


class EditWord extends FormRow {
  constructor(props) {
    super(props)
    const tags = this.getTags(props.word);
    this.state = {
      feedback: false,
      word: props.word.word,
      part: props.word.part,
      tags: tags,
      book: props.word.book,
      unit: props.word.unit,
      cefr: props.word.cefr
    }
    this.editVocabEntry = this.editVocabEntry.bind(this);
  }

  editVocabEntry() {
    let valid = this.getValidState();
    if (!valid) {
      this.setState({feedback:true});
      return;
    }
    const tags = this.state.tags.split(',');
    const entry = {
      word: this.state.word,
      part: this.state.part,
      tags: tags,
      book: this.state.book,
      unit: this.state.unit,
      cefr: this.state.cefr
    }
    this.props.editVocabEntry(entry,this.props.word.wid);
  }

  getTags(word) {
    let tags = [];
    for (let tag in word.tags) {
      tags.push(word.tags[tag]);
    }
    return tags.join(',');
  }

  render() {
    return (
      <tr className="EditWord">
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
                name="tags"
                className="row-input-long"
                type="text"
                value={this.state.tags}
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
          <td><Button bsStyle="primary" onClick={this.editVocabEntry}>Save</Button></td>
      </tr>
    )
  }
}


export default EditWord;

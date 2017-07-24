import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import WordRow from '../WordRow/WordRow';
import FormRow from '../FormRow/FormRow';
import './ResultBox.css';

class ResultBox extends Component {
  render() {
    let rows = [];
    let keyIndex = 0;
    for (let w in this.props.vocab) {
      const word = this.props.vocab[w];
      if (word.word.indexOf(this.props.filterText) === -1) { return; }
      else if (word.cefr < this.props.cefrMin || word.cefr > this.props.cefrMax ) {
        return;
      }
      else if (this.props.set.length > 1 && word.set.indexOf(this.props.set) === -1) {
        return;
      }
      else if (word.book < this.props.books.min || word.book > this.props.books.max) {
        return;
      }
      else if (word.unit < this.props.units.min || word.unit > this.props.units.max) {
        return;
      }
      else if (word.cefr < this.props.cefr.min || word.cefr > this.props.cefr.max) {
        return;
      }
      else {
        rows.push(
          <WordRow word={word} key={keyIndex++}/>
      )}
    }
    return(
      <div className="ResultBox">
        <Table responsive hover>
          <thead>
            <tr>
              <th>word</th>
              <th>part of speech</th>
              <th>lexical set</th>
              <th>book</th>
              <th>unit</th>
              <th>cefr</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <FormRow addVocabEntry={this.props.addVocabEntry}/>
            {rows}
          </tbody>
        </Table>
      </div>
    )
  }
}


export default ResultBox;

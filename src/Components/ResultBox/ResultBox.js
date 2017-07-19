import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import WordRow from '../WordRow/WordRow';
import './ResultBox.css';

class ResultBox extends Component {
  render() {
    let rows = [];
    let keyIndex = 0;
    this.props.vocab.forEach((word) => {
      if (word.word.indexOf(this.props.filterText) === -1) { return; }
      else if (word.cefr < this.props.cefrMin || word.cefr > this.props.cefrMax ) {
        return;
      }
      else if (this.props.set.length > 1 && word.set.indexOf(this.props.set) === -1) {
        return;
      }
      else {
        rows.push(
          <WordRow word={word} key={keyIndex++}/>
      )}
    })
    return(
      <div className="ResultBox">
        <Table responsive hover>
          <thead>
            <tr>
              <th></th>
              <th>part of speech</th>
              <th>lexical set</th>
              <th>book</th>
              <th>unit</th>
              <th>cefr</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    )
  }
}


export default ResultBox;

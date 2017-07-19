import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './ResultBox.css';

class ResultBox extends Component {
  render() {
    let rows = [];
    let keyIndex = 0;
    this.props.vocab.forEach((word) => {
      if (word.word.indexOf(this.props.filterText) === -1) { return; }
      else { rows.push(
        <tr key={keyIndex++}>
          <td>{word.word}</td>
          <td>{word.part}</td>
          <td>{word.book}</td>
          <td>{word.unit}</td>
          <td>{word.cefr}</td>
        </tr>
      )}
    })
    return(
      <div className="ResultBox">
        <Table responsive hover>
          <thead>
            <tr>
              <th></th>
              <th>part of speech</th>
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

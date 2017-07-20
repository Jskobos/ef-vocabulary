import React, { Component } from 'react';
import './WordRow.css';

const cefrLabels = ['A1','A2','B1','B2','C1','C2'];

class WordRow extends Component {
  render() {
    const word = this.props.word;
    return (
        <tr className="WordRow" key={this.props.keyIndex}>
          <td>{word.word}</td>
          <td>{word.part}</td>
          <td>{word.set}</td>
          <td>{word.book}</td>
          <td>{word.unit}</td>
          <td>{cefrLabels[word.cefr]}</td>
        </tr>
  )}
}

export default WordRow;

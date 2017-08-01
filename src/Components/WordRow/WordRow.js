import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './WordRow.css';

const cefrLabels = ['A1','A2','B1','B2','C1','C2'];

class WordRow extends Component {
  render() {
    const word = this.props.word;
    const tags = word.tags ? word.tags.join(', ') : '';
    return (
        <tr className="WordRow" key={this.props.keyIndex}>
          <td>{word.word}</td>
          <td>{word.part}</td>
          <td>{tags}</td>
          <td>{word.book}</td>
          <td>{word.unit}</td>
          <td>{cefrLabels[word.cefr]}</td>
          <td><Glyphicon onClick={() => this.props.deleteVocabEntry(this.props.wid)} className="delete-icon" glyph="remove"/></td>
        </tr>
  )}
}

export default WordRow;

import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './WordRow.css';

const cefrLabels = ['A1','A2','B1','B2','C1','C2',''];

class WordRow extends Component {
  handleDelete(e, wordID) {
    e.stopPropagation();
    this.props.deleteVocabEntry(wordID);
  }

  render() {
    const word = this.props.word;
    const tags = word.tags ? word.tags.join(', ') : '';
    return (
        <tr className="WordRow" key={this.props.keyIndex}
            onClick={() => this.props.setEditableWord(word.wid)}>
          <td>{word.word}</td>
          <td>{word.part}</td>
          <td>{tags}</td>
          <td>{word.book}</td>
          <td>{word.unit}</td>
          <td>{cefrLabels[word.cefr]}</td>
          <td><Glyphicon onClick={(e) => this.handleDelete(e, word.wid)} className="delete-icon" glyph="remove"/></td>
        </tr>
  )}
}

export default WordRow;

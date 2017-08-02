import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import WordRow from '../WordRow/WordRow';
import FormRow from '../FormRow/FormRow';
import './ResultBox.css';

class ResultBox extends Component {
  constructor(props) {
    super(props);
    this.getTags    = this.getTags.bind(this);
    this.filterWord = this.filterWord.bind(this);
  }

  getTags(word) {
    let tags = [];
    for (let tag in word.tags) {
      tags.push(word.tags[tag]);
    }
    return tags.join(', ');
  }

  filterWord(word) {
    const tags = this.getTags(word);
    if (word.word.indexOf(this.props.filterText) === -1) {
      return false;
    }
    else if (word.cefr < this.props.cefrMin || word.cefr > this.props.cefrMax ) {
      return false;
    }
    else if (this.props.set.length > 1 && tags.indexOf(this.props.set) === -1) {
      return false;
    }
    else if (word.book < this.props.books.min || word.book > this.props.books.max) {
      return false;
    }
    else if (word.unit < this.props.units.min || word.unit > this.props.units.max) {
      return false;
    }
    else if (word.cefr < this.props.cefr.min || word.cefr > this.props.cefr.max) {
      return false;
    }
    else {
      return true;
    }
  }

  sortBy(wordArray, sortKey) {
    const sortedArray = wordArray.sort((a,b) => {
      return a[sortKey] > b[sortKey];
    });
    return sortedArray;
  }

  render() {
    let words = [];
    let rows = [];
    let keyIndex = 0;
    for (let w in this.props.vocab) {
      const word = this.props.vocab[w];
      if (this.filterWord(word)) {
        words.push(word);
      }
    }
    words = this.sortBy(words,this.props.sortKey);
    for (let w in words) {
      const word = words[w];
      rows.push(
        <WordRow word={word} wid={w} deleteVocabEntry={this.props.deleteVocabEntry} key={keyIndex++}/>
      )
    }
    return(
      <div className="ResultBox">
        <Table responsive hover>
          <thead>
            <tr>
              <th>word</th>
              <th>part of speech</th>
              <th>tags</th>
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

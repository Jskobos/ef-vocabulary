import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import WordRow from '../WordRow/WordRow';
import NewWord from '../NewWord/NewWord';
import EditWord from '../EditWord/EditWord';
import renderIf from 'render-if';
import './ResultBox.css';

class ResultBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editableWordID: null,
      maxWordsDisplayed: 100
    };
    this.getTags           = this.getTags.bind(this);
    this.filterWord        = this.filterWord.bind(this);
    this.editVocabEntry    = this.editVocabEntry.bind(this);
    this.setEditableWord   = this.setEditableWord.bind(this);
    this.incrementMaxWords = this.incrementMaxWords.bind(this);
    this.handleScroll      = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const el = document.getElementsByClassName('ResultBox')[0];
    el.onscroll = this.handleScroll;
  }

  getTags(word) {
    let tags = [];
    for (let tag in word.tags) {
      tags.push(word.tags[tag]);
    }
    return tags.join(', ');
  }

  getRows(words) {
    let rows = [];
    words = this.sortBy(words,this.props.sortKey);
    for (let w in words) {
      const word = words[w];
      if (word.wid === this.state.editableWordID) {
        rows.push(
          <EditWord word={word} editVocabEntry={this.editVocabEntry} key={word.wid}/>
        )
      }
      else {
        rows.push(
        <WordRow word={word} wid={word.wid} setEditableWord={this.setEditableWord}
          deleteVocabEntry={this.props.deleteVocabEntry} key={word.wid}/>
        )
      }
      if (rows.length >= this.state.maxWordsDisplayed) { return rows; }
    }
    return rows;
  }

  setEditableWord(wordID) {
    console.log('setting');
    this.setState({
      editableWordID: wordID
    });
  }

  editVocabEntry(entry,wordID) {
    this.setEditableWord(null);
    this.props.editVocabEntry(entry,wordID);
  }

  filterWord(word) {
    const tags = this.getTags(word);
    if (word.word.indexOf(this.props.filterText) === -1) {
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

  handleScroll(e) {
    const rect = e.target.getBoundingClientRect();
    const topHeight = Math.ceil(rect.top) + 20;
    const minPixel = e.target.offsetTop;
    const maxPixel = e.target.scrollHeight - minPixel - topHeight;
    if (e.target.scrollTop >= maxPixel) {
      this.incrementMaxWords();
    }
  }

  sortBy(wordArray, sortKey) {
    const sortedArray = wordArray.sort((a,b) => {
      return a[sortKey] > b[sortKey];
    });
    return sortedArray;
  }

  incrementMaxWords(increment=50) {
    const newMax = this.state.maxWordsDisplayed + increment;
    this.setState({maxWordsDisplayed: newMax});
  }

  render() {
    let words = [];
    for (let w in this.props.vocab) {
      const word = this.props.vocab[w];
      word.wid = w;
      if (this.filterWord(word)) {
        words.push(word);
      }
    }
    const rows = this.getRows(words);
    return(
      <div className="ResultBox">
        <Table id="WordTable" responsive hover>
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
            {renderIf(this.props.projectID !== 'newProject' && this.props.projectID !== undefined)
              (<NewWord addVocabEntry={this.props.addVocabEntry}/>)}
            {rows}
          </tbody>
        </Table>
      </div>
    )
  }
}


export default ResultBox;

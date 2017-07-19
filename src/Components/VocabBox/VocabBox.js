import React, { Component } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../SearchBox/SearchBox';
import './VocabBox.css';

const vocab = [
  {'word':'dog','cefr':'A1','part':'noun','unit':1,'book':1},
  {'word':'velociraptor','cefr':'B2','part':'noun','unit':3,'book':4},
  {'word':'decide','cefr':'B1','part':'verb','unit':2,'book':3},
  {'word':'disappointed','cefr':'A2','part':'adjective','unit':5,'book':2}
]

class VocabBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      vocab: vocab,
      filterText: '',
      searchMode: true
    }
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(val) {
    this.setState({filterText:val})
  }

  render() {
    return (
      <div className="VocabBox">
        <SearchBox filterText={this.state.filterText}
                   handleTextInput={this.handleTextInput}/>
        <ResultBox vocab={this.state.vocab}
                   filterText={this.state.filterText}/>
      </div>
    )
  }
}

export default VocabBox;

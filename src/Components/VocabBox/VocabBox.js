import React, { Component } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../SearchBox/SearchBox';
import './VocabBox.css';

const vocab = [
  {'word':'dog','cefr':'A1','part':'noun','unit':1,'book':1, 'set':'animals'},
  {'word':'velociraptor','cefr':'B2','part':'noun','unit':3,'book':4,'set':'animals'},
  {'word':'decide','cefr':'B1','part':'verb','unit':2,'book':3,'set':''},
  {'word':'disappointed','cefr':'A2','part':'adjective','unit':5,'book':2,'set':'emotions'}
]

class VocabBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      vocab: vocab,
      filterText: '',
      cefrMin: 'A1',
      cefrMax: 'C2',
      searchMode: true
    }
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(val) {
    this.setState({filterText:val})
  }

  setCefrRange(cMin, cMax) {
    this.setState({
      cefrMin: cMin,
      cefrMax: cMax
    })
  }

  render() {
    return (
      <div className="VocabBox">
        <SearchBox filterText={this.state.filterText}
                   cefrMin={this.state.cefrMin}
                   cefrMax={this.state.cefrMax}
                   handleTextInput={this.handleTextInput}/>
        <ResultBox vocab={this.state.vocab}
                   cefrMin={this.state.cefrMin}
                   cefrMax={this.state.cefrMax}
                   filterText={this.state.filterText}/>
      </div>
    )
  }
}

export default VocabBox;

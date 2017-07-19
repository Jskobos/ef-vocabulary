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
      set: '',
      units: {min:1, max:10},
      books: {min:1, max:10},
      searchMode: true
    }
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSetInput  = this.handleSetInput.bind(this);
    this.setBooks        = this.setBooks.bind(this);
    this.setUnits        = this.setUnits.bind(this);
  }

  handleTextInput(val) {
    this.setState({filterText:val})
  }

  handleSetInput(val) {
    this.setState({set:val})
  }

  setCefrRange(cMin, cMax) {
    this.setState({
      cefrMin: cMin,
      cefrMax: cMax
    })
  }

  setBooks(min,max) {
    this.setState({
      books: {min:min, max:max}
    })
  }

  setUnits(min,max) {
    this.setState({
      units: {min:min, max:max}
    })
  }

  render() {
    return (
      <div className="VocabBox">
        <SearchBox filterText={this.state.filterText}
                   cefrMin={this.state.cefrMin}
                   cefrMax={this.state.cefrMax}
                   set={this.state.set}
                   books={this.state.books}
                   units={this.state.units}
                   handleTextInput={this.handleTextInput}
                   handleSetInput={this.handleSetInput}
                   setBooks={this.setBooks}
                   setUnits={this.setUnits}/>
        <ResultBox vocab={this.state.vocab}
                   cefrMin={this.state.cefrMin}
                   cefrMax={this.state.cefrMax}
                   set={this.state.set}
                   books={this.state.books}
                   units={this.state.units}
                   filterText={this.state.filterText}/>
      </div>
    )
  }
}

export default VocabBox;

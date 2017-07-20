import React, { Component } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../SearchBox/SearchBox';
import './VocabBox.css';

const vocab = [
  {'word':'dog','cefr':0,'part':'noun','unit':1,'book':1, 'set':'animals'},
  {'word':'velociraptor','cefr':3,'part':'noun','unit':3,'book':4,'set':'animals'},
  {'word':'decide','cefr':2,'part':'verb','unit':2,'book':3,'set':''},
  {'word':'disappointed','cefr':1,'part':'adjective','unit':5,'book':2,'set':'emotions'}
]

class VocabBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      vocab: vocab,
      filterText: '',
      set: '',
      units: {min:1, max:10},
      books: {min:1, max:10},
      cefr:  {min:0,max:5}
    }
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSetInput  = this.handleSetInput.bind(this);
    this.setBooks        = this.setBooks.bind(this);
    this.setUnits        = this.setUnits.bind(this);
    this.setCefrRange    = this.setCefrRange.bind(this);
  }

  handleTextInput(val) {
    this.setState({filterText:val})
  }

  handleSetInput(val) {
    this.setState({set:val})
  }

  setBooks(min,max) {
    if (min > max && max !== '') { max = min }
    this.setState({
      books: {min:min, max:max}
    })
  }

  setUnits(min,max) {
    if (min > max && max !== '') { max = min }
    this.setState({
      units: {min:min, max:max}
    })
  }

  setCefrRange(min,max) {
    this.setState({
      cefr: {min:min, max:max}
    })
  }

  render() {
    return (
      <div className="VocabBox">
        <SearchBox filterText={this.state.filterText}
                   cefr={this.state.cefr}
                   set={this.state.set}
                   books={this.state.books}
                   units={this.state.units}
                   handleTextInput={this.handleTextInput}
                   handleSetInput={this.handleSetInput}
                   setBooks={this.setBooks}
                   setUnits={this.setUnits}
                   setCefrRange={this.setCefrRange}/>
        <ResultBox vocab={this.state.vocab}
                   cefr={this.state.cefr}
                   set={this.state.set}
                   books={this.state.books}
                   units={this.state.units}
                   filterText={this.state.filterText}/>
      </div>
    )
  }
}

export default VocabBox;

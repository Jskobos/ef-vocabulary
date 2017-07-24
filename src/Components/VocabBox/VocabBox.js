import React, { Component } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../SearchBox/SearchBox';
import renderIf from 'render-if';
import firebaseApp from '../../firebase';
import './VocabBox.css';

class VocabBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      set: '',
      units: {min:1, max:10},
      books: {min:1, max:10},
      cefr:  {min:0,max:5},
      vocab: this.props.project.vocab
    }

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSetInput  = this.handleSetInput.bind(this);
    this.setBooks        = this.setBooks.bind(this);
    this.setUnits        = this.setUnits.bind(this);
    this.setCefrRange    = this.setCefrRange.bind(this);
    this.addVocabEntry   = this.addVocabEntry.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      vocab: nextProps.project.vocab
    })
  }

  handleTextInput(val) {
    this.setState({filterText:val})
  }

  handleSetInput(val) {
    this.setState({set:val})
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

  setCefrRange(min,max) {
    this.setState({
      cefr: {min:min, max:max}
    })
  }

  addVocabEntry(entry) {
    const vocabRef = firebaseApp.database().ref('/projects/' + this.props.project.key + '/vocab');
    const newEntry = vocabRef.push(entry).then((key) => {
      let vocab = JSON.parse(JSON.stringify(this.state.vocab));
      vocab[key] = entry;
      this.setState({
        vocab:vocab
      });
    });

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
        {renderIf(this.props.project.vocab)(<ResultBox vocab={this.state.vocab}
                   cefr={this.state.cefr}
                   set={this.state.set}
                   books={this.state.books}
                   units={this.state.units}
                   filterText={this.state.filterText}
                   addVocabEntry={this.addVocabEntry}/>)}
      </div>
    )
  }
}

export default VocabBox;

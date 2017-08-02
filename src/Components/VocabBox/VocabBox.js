import React, { Component } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../SearchBox/SearchBox';
import firebase from '../../firebase';
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

    this.handleTextInput  = this.handleTextInput.bind(this);
    this.handleSetInput   = this.handleSetInput.bind(this);
    this.addVocabEntry    = this.addVocabEntry.bind(this);
    this.deleteVocabEntry = this.deleteVocabEntry.bind(this);
    this.setMinMax        = this.setMinMax.bind(this);
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

  setMinMax(target,min,max) {
    this.setState({
      [target]: {min:min, max:max}
    });
  }

  addVocabEntry(entry) {
    const vocabRef = firebase.database().ref('/projects/' + this.props.project.key + '/vocab');
    vocabRef.push(entry);
  }

  deleteVocabEntry(wordID) {
    const wordRef = firebase.database().ref('/projects/' + this.props.project.key + '/vocab/' + wordID);
    wordRef.remove().then(() => console.log(`Database entry ${wordID} removed.`));
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
                   setMinMax={this.setMinMax}/>
        <ResultBox vocab={this.state.vocab}
                   cefr={this.state.cefr}
                   set={this.state.set}
                   books={this.state.books}
                   units={this.state.units}
                   filterText={this.state.filterText}
                   addVocabEntry={this.addVocabEntry}
                   deleteVocabEntry={this.deleteVocabEntry}/>
      </div>
    )
  }
}

export default VocabBox;
